import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';

class QuoteModal extends Component {
    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} className="modal-lg">
                <ModalBody>
                    <iframe title="tenants" src="https://st-clair.brokerlift.net/gore-tenants" width="100%" height="800"> </iframe>
                </ModalBody>
            </Modal>
        )
    }
}
export default QuoteModal;