import { Component } from "react";
import {Overlay,ModalDiv} from './Modal.styles'
class Modal extends Component {
onCloseModalByEsc = (e) => {
    if (e.keyCode === 27) {
      this.props.handleTogleModal();
    }
  };
    componentDidMount() {
        console.log('componentsDidMount')
        window.addEventListener("keydown", this.onCloseModalByEsc);
    }
    componentWillUnmount() {
        window.removeEventListener("keydown",this.onCloseModalByEsc)
    }
  render() {
    return (
      <Overlay  onClick={(e) => {
          if (e.target === e.currentTarget) {
            this.props.handleTogleModal();
          }
        }}>
        <ModalDiv  >
          <img src={this.props.modalImg} alt={this.props.tag} />
        </ModalDiv>
      </Overlay>
    );
  }
}

export default Modal;
