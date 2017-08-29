import expect from 'expect';
import reducer from './eventReducer';
import * as actionTypes from '../actions/actionTypes';

describe('Event Reducer Tests', () => {
    it('Shoulw return a list of events when call the reducer with LOAD_EVENTS_SUCCESS', () => {
        const event = {
            title: 'Father birthday'
        };
        const events = [event];
        const action = {
            type: actionTypes.LOAD_EVENTS_SUCCESS,
            events: events
        };

        const state = reducer([], action);

        expect(state).toEqual(events);
    });

    it('Should add the new event when action ADD_EVENT dispatch', () => {
        const event = {title: 'Father day'};
        const action = {
            type: actionTypes.ADD_EVENT,
            event: event
        };
        const expectedState = [event];

        const state = reducer([], action);

        expect(state).toEqual(expectedState);
    });
});