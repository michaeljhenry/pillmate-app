import uuid from 'uuid';
import database from '../firebase/firebase';

export const addDay = (day) => ({
    type: 'ADD_DAY',
    day
});

export const startAddDay = (dayData = {}) => {
    return(dispatch, getState) => {
        const day = dayData.dispenseDay;
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/days`).push(day)
        .then((ref) => {
            dispatch(addDay(day))
        });
    };
};

export const setDays = (days) => ({
    type: 'SET_DAYS',
    days
});

export const startSetDays = () => {
    
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/days`).once('value').then((snapshot) => console.log(snapshot.val()));
        return database.ref(`users/${uid}/days`).once('value')
        .then((snapshot) => {
            let daysArray = [];
            snapshot.forEach((childSnapshot) => {
                daysArray.push(childSnapshot.val());
            })
            dispatch(setDays(daysArray));
        });
    }

};

// export const startGetDays () => {
//     return(dispatch, getState) => {
//         const uid = getState().auth.uid;
//         return dattabase.ref(`users/${uid}/days`).get('value')
//     }
// }