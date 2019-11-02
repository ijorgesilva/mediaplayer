import React, { Component } from 'react';

class ModalTrigger extends Component {
  render() {
    return (
      <a
        ref={this.props.buttonRef}
        onClick={this.props.showModal}
        className="modal-button"
      >
        {this.props.title}
      </a>
    );
  }
}

export default ModalTrigger;
