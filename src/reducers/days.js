const daysReducerDefaultState = [];

export default (state = daysReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_DAY':
            return [...state, action.day];
        case 'SET_DAYS':
            return action.days
        default:
            return state
    };
};