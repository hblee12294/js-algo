import React, { Component } from 'react'


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
          <input type="text"/>
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