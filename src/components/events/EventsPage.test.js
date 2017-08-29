import {shallow, mount} from 'enzyme';
import expect from 'expect';
import {EventsPage} from "./EventsPage";
import React from "react";

describe('Events Page Tests', () => {
    it('Should render the page with h2 title', () => {
        const props = {
            eventActions: () => {},
            events: []
        };

        const wrapper = shallow(<EventsPage {...props}/>);
        expect(wrapper.find('h2').first().text()).toBe("Event's Page");
    });
});
