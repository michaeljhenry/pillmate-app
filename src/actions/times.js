import uuid from 'uuid';

export const addTime = ({dispenseDay, hourOne, minuteOne, secondOne, hourTwo, minuteTwo, secondTwo}) => {
    const id = uuid();
    const time = {id, dispenseDay,hourOne, minuteOne, secondOne, hourTwo, minuteTwo, secondTwo }
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
