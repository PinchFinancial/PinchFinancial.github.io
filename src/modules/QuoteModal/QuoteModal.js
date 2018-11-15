import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal, ModalBody } from 'reactstrap';
import './QuoteModal.css';

class QuoteModal extends Component {

    // Working with IFrames is tricky for a myriad of different reasons -
    // you cannot interact with them directly without triggering the browser's
    // Cross Site scripting protection and you cannot just use DOMContentLoaded
    // to detect changes if the iframe's webpage has loaded.
    // Ideally you'd just forgo the iFrame and send rest calls to middleware
    // to route the request without triggering the cross site protection.

    resizeToContent() {
        if (this.element)
        {
            var iframe = this.element.querySelector('iframe');
            iframe.setAttribute("style", 'width:' + iframe.contentWindow.top.innerWidth + 'px; height:' + iframe.contentWindow.top.innerHeight + 'px');
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} className="modal-lg">
                <ModalBody>
                    <iframe id="tenants" title="tenants" src="https://st-clair.brokerlift.net/gore-tenants"> </iframe>
                </ModalBody>
            </Modal>
        )
    }

    componentDidUpdate() {
      this.element = ReactDOM.findDOMNode(this);
      if (this.element && !this.resizeHandler)
      {
        let resizeFunction = this.resizeToContent.bind(this);
        resizeFunction();
        this.resizeHandler = setInterval(resizeFunction, 1000);
      }
      else
      {
        clearInterval(this.resizeHandler);
        this.resizeHandler = null;
      }
    }
}
export default QuoteModal;
