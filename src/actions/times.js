import uuid from 'uuid';
import database from '../firebase/firebase';


export const addTime = ({dispenseDay, hourOne, minuteOne, secondOne, hourTwo, minuteTwo, secondTwo}) => {
    const id = uuid();
    const time = {id, dispenseDay,hourOne, minuteOne, secondOne, hourTwo, minuteTwo, secondTwo }
    database.ref().push(time)
    return{
        type: 'ADD_TIME',
        time
    }
};

export const editTime = (id, updates) => {
    return {
        type: 'EDIT_TIME',
        id,
        updates
    }
};
