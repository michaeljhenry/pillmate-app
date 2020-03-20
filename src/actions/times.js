import uuid from 'uuid';
import database from '../firebase/firebase';


export const startAddTime = (timeData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            dispenseDay = '',
            hourOne = '',
            minuteOne = '',
            secondOne = '',
            hourTwo = '',
            minuteTwo,
            secondTwo = ''
        } = timeData;
        const time = {dispenseDay, hourOne, minuteOne, secondOne, hourTwo, minuteTwo, secondTwo};
        return database.ref(`users/${uid}/times`).push(time)
        .then((ref) => {
            dispatch(addTime({
                id: ref.key,
                ...time
            }));
        });
    };
};

export const startEditTime = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/times/${id}`).update(updates)
        .then(() => {
            dispatch(editTime(id, updates))
        });
    };
};

export const startSetTimes = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/times`).once('value')
        .then((snapshot) => {
            let timesArray = [];
            snapshot.forEach((childSnapshot) => {
                timesArray.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setTimes(timesArray));
        });
    };
};


export const addTime = ({dispenseDay, hourOne, minuteOne, secondOne, hourTwo, minuteTwo, secondTwo}) => {
    const id = uuid();
    const time = {id, dispenseDay,hourOne, minuteOne, secondOne, hourTwo, minuteTwo, secondTwo }
    database.ref().push(time)
    return{
        type: 'ADD_TIME',
        time
    };
};

export const editTime = (id, updates) => {
    return {
        type: 'EDIT_TIME',
        id,
        updates
    };
};

export const setTimes = (times) => ({
    type: 'SET_TIMES',
    times
});


