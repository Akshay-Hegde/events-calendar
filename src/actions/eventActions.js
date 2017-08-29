import * as actionTypes from './actionTypes';
import * as eventsApi from '../api/eventApi';

export function loadEvents() {
    return dispatch => {
        return eventsApi.getAllEvents()
            .then(events => {
                const action = {
                    type: actionTypes.LOAD_EVENTS_SUCCESS,
                    events: events
                };

                dispatch(action);
            })
            .catch(err => {
                throw(err);
            });
    }
}

export function addEvent(event) {
    const newEvent = Object.assign({}, event);
    const date = newEvent.date;
    newEvent.date = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();

    return (dispatch, getState) => {
        return eventsApi.addEvent(newEvent)
            .then(e => {
                const action = {
                    type: actionTypes.ADD_EVENT,
                    event: e
                };

                dispatch(action);

                return e;
            });
    }
}

export function loadEventsByDate(date) {
    return dispatch => {
        return eventsApi.findEventsByDate(date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear())
            .then(events => {
                const action = {
                    type: actionTypes.LOAD_EVENTS_SUCCESS,
                    events: events
                };

                dispatch(action);

                return events;
            });
    }
}