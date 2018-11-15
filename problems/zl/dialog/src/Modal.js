import { Component } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root')

class Modal extends Component {
  constructor(props) {
    super(props)
    this.modal = document.createElement('div')
  }

  componentDidMount() {
    modalRoot.append(this.modal)
  }

  componentWillUnmount() {
    this.modal.remove()
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.modal
    )
  }
}

export default Modal