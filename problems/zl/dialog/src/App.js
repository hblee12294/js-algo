import React, { Component } from 'react';
import './App.css';

import Modal from './Modal'
import Dialog from './Dialog'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'click to input message',
      popupShow: false,
    }

    this.clickHandle = this.clickHandle.bind(this)
    this.submitHandle = this.submitHandle.bind(this)
    this.cancelHandle = this.cancelHandle.bind(this)
  }

  clickHandle() {
    this.setState({
      popupShow: !this.state.popupShow
    })
  }

  submitHandle(value) {
    this.setState({
      message: value,
      popupShow: !this.state.popupShow
    })
  }

  cancelHandle() {
    this.setState({
      popupShow: !this.state.popupShow
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Dialog Example</h1>
        <p className="message">Message: { this.state.message }</p>
        <button
          className="button"
          onClick={ this.clickHandle }
        >
          Click to input
        </button>
        <Modal>
          { this.state.popupShow ? 
            <Dialog
              onSubmit={ this.submitHandle }
              onCancel={ this.cancelHandle }
            /> : null
          }
        </Modal>
      </div>
    );
  }
}

export default App;
