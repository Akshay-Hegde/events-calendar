import {Accordion, Panel} from "react-bootstrap";
import * as React from "react";

const EventList = ({events}) => {
    return (
        <div>
            {events.length > 0 ?
                <Accordion>
                    {events.map((event, idx) => (
                        <Panel key={idx} header={event.title} eventKey={idx + 1}>
                            <span>{event.description}</span>
                            <br/>
                            <br/>
                            <p>
                                <label htmlFor="">Participants: </label>
                                <span> {event.participants}</span>
                            </p>
                        </Panel>
                    ))}
                </Accordion>
            : <span>There's not event for today.</span>}
        </div>
    )
};

export default EventList;