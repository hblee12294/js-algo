import React, { Component } from 'react'

import './Dialog.css'


class Dialog extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleSubmit() {
    this.props.onSubmit(this.el.value)
  }

  handleCancel() {
    this.props.onCancel()
  }

  render() {
    return (
      <div className="dialog">
        <div className="body">
          <div className="head"></div>
          <input type="text" ref={ element => this.el = element }/>
          <div className="btn-group">
            <button
              className="submit"
              onClick={ this.handleSubmit }
            >
              Submit
            </button>
            <button
              className="cancel"
              onClick={ this.handleCancel }
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Dialog