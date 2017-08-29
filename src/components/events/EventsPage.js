import React from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as eventActions from '../../actions/eventActions';
import EventList from "./EventList";
import EventRegisterModal from "./EventRegisterModal";

export class EventsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        const date = moment();

        this.state = {
            date: date,
            showModal: false,
            event: {
                title: '',
                participants: '',
                description: '',
                date: date._d
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.onEventFormSubmit = this.onEventFormSubmit.bind(this);
        this.onChangeEventFormField = this.onChangeEventFormField.bind(this);
    }

    handleChange(date) {
        this.props.eventActions.loadEventsByDate(date._d);

        this.setState({
            date: date,
            event: Object.assign({}, this.state.event, {date: date._d})
        });
    }

    componentDidMount() {
        // this.props.eventActions.loadEvents();
        this.props.eventActions.loadEventsByDate(this.state.date._d);
    }

    showModal() {
        this.setState({showModal: true})
    }

    hideModal() {
        this.setState({showModal: false})
    }

    onEventFormSubmit(evt) {
        evt.preventDefault();
        this.props.eventActions.addEvent(this.state.event)
            .then(() => {
                this.hideModal();
                this.setState({
                    event: {
                        title: '',
                        participants: '',
                        description: ''
                    }
                })
            });
    }

    onChangeEventFormField(evt) {
        const field = evt.target.name;
        const value = evt.target.value;

        this.setState({
            event: Object.assign({}, this.state.event, {[field]: value})
        });
    }

    render() {
        return (
            <div>
                <h2>Event's Page</h2>
                <hr/>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <h3>Calendar</h3>
                        <DatePicker
                            inline
                            selected={this.state.date}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-md-8">
                        <h3> Events ({this.props.events.length})
                            <span className="btn-group pull-right">
                                <button className="btn btn-primary" onClick={this.showModal}>Add event</button>
                            </span>
                        </h3>
                        <EventList events={this.props.events}/>
                    </div>
                </div>
                <EventRegisterModal show={this.state.showModal}
                                    event={this.state.event}
                                    onChange={this.onChangeEventFormField}
                                    hideModal={this.hideModal}
                                    onSubmit={this.onEventFormSubmit}/>
            </div>
        );
    };
}

function mapStateToProps(state, ownProps) {
    return {
        events: state.events
    }
}

function mapActionToDispatch(dispatch) {
    return {
        eventActions: bindActionCreators(eventActions, dispatch)
    }
}

export default connect(mapStateToProps, mapActionToDispatch)(EventsPage);
