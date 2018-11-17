import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
            iframe.setAttribute(
              "style",
              'width:' + iframe.contentWindow.top.innerWidth + 'px; height: ' + + iframe.contentWindow.top.innerHeight + "px"
            );
        }
    }

    render() {
        return (
          <>
            {
              this.props.modal && (
                <div className="pinch-modal">
                  <div className="backdrop" onClick={this.props.toggle}></div>
                  <div className="iframe-wrapper">
                    <iframe id="tenants" title="tenants" src="https://st-clair.brokerlift.net/gore-tenants"> </iframe>
                  </div>
                </div>
              )
            }
          </>
            // <Modal isOpen={this.props.modal} toggle={this.props.toggle} className="modal-lg">
            //   <iframe id="tenants" title="tenants" src="https://st-clair.brokerlift.net/gore-tenants"> </iframe>
            // </Modal>
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

QuoteModal.defaultProps = {
  modal: false,
  toggle: ()=>{}
}

export default QuoteModal;
