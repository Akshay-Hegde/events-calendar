import * as actionTypes from '../actions/actionTypes';

export default function (state = [], action) {
    switch (action.type){
        case actionTypes.LOAD_EVENTS_SUCCESS:
            return action.events;
        case actionTypes.ADD_EVENT:
            return [...state, Object.assign({}, action.event)];
        default:
            return state;
    }
};
