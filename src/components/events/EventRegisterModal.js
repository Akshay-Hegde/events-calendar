import * as React from "react";
import {Button, ControlLabel, FormControl, FormGroup, Modal} from "react-bootstrap";

class EventRegisterModal extends React.Component {
    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.hideModal}
                dialogClassName="custom-modal">
                <form onSubmit={this.props.onSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Register an event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup>
                            <ControlLabel>Title</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter the title"
                                name="title"
                                onChange={this.props.onChange}
                                value={this.props.event.title}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Participants</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter the participants separated by commas"
                                name="participants"
                                onChange={this.props.onChange}
                                value={this.props.event.participants}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Description</ControlLabel>
                            <FormControl componentClass="textarea"
                                         name="description"
                                         value={this.props.event.description}
                                         onChange={this.props.onChange}
                                         placeholder="Enter a description of the event"/>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" bsStyle="primary">Save</Button>
                        <Button onClick={this.props.hideModal}>Close</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        )
    }
}

export default EventRegisterModal;
