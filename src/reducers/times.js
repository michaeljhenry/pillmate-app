
const timesReducerDefaultState = [];

export default  (state = timesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_TIME':
            //console.log('hi')
            return [...state, action.time];
        case 'EDIT_TIME':
            console.log('hello');
            return state.map((time) => {
                console.log(action);
                if(time.id === action.id) {
                    console.log('hi');
                    return {
                        ...time,
                        ...action.updates
                    }

                } else {
                    return time;
                }
            });
            case 'SET_TIMES':
                return action.times
        default: return state;
    }
}