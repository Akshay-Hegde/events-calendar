import configureMockStore from 'redux-mock-store'
import * as eventActions from './eventActions';
import * as actionTypes from './actionTypes';
import expect from 'expect';
import thunk from 'redux-thunk';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Event Actions Tests', () => {

    it('Should dispatch LOAD_EVENT_SUCCESS and return expected events action when loadEventSuccess', () => {
        const expectedActions = [{type: actionTypes.LOAD_EVENTS_SUCCESS, events: []}];
        const store = mockStore({events: []});

        store.dispatch(eventActions.loadEvents())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            })
    });

    it('Should dispatch ADD_EVENT when create a new event', () => {
        const event = {title: 'Father day'};
        const expectedActions = [
            {
                type: actionTypes.ADD_EVENT,
                event: event
            }
        ];
        const store = mockStore({events: []});

        store.dispatch(eventActions.addEvent(event))
            .then((event) => {
                expect(store.getActions()).toEqual(expectedActions);
                expect(event.title).toEqual('Father day');
            });
    });
});
