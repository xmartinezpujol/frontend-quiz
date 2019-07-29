import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalBackdrop = styled.div({
  position: 'fixed',
  zIndex: 1000,
  top: 0,
  left: 0,
  boxSizing: 'border-box',
  fontSize: 16,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexFlow: 'column wrap',
  color: '#000',
  backgroundColor: 'rgba(26, 29, 31, 0.8)',
});

const ModalDialog = styled.div({
  position: 'fixed',
  zIndex: 900,
  top: 0,
  left: 0,
  boxSizing: 'border-box',
  fontSize: 16,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexFlow: 'column wrap',
  color: '#000',
  transition: 'all 1s ease',
});

const fullWindowModal = (props) => {
  if (props.windowed) {
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      borderRadius: 0,
    };
  }
  return {};
};

const ModalContainer = styled.div(
  {
    position: 'fixed',
    zIndex: 1001,
    boxSizing: 'border-box',
    fontSize: 16,
    display: 'flex',
    flexFlow: 'column wrap',
    color: '#000',
    borderRadius: 6,
    '@media(max-width: 767px)': {
      maxHeight: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
    },
  },
  props => ({
    padding: props.padding,
    backgroundColor: props.color,
    alignItems: props.align,
    justifyContent: props.justify,
    ...fullWindowModal(props),
  }),
);

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.clickedContainer = this.clickedContainer.bind(this);
    this.handleEsc = this.handleEsc.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEsc, false);
  }

  closeModal(e) {
    e.stopPropagation();
    this.props.onModalClose();
  }

  clickedContainer(e) {
    e.stopPropagation();
  }

  handleEsc(e) {
    if (e.keyCode === 27) {
      this.closeModal(e);
    }
  }

  render() {
    return ReactDOM.createPortal(
      <div>
        <ModalDialog>
          <ModalBackdrop
            onClick={e => this.closeModal(e)}
            onKeyDown={e => this.handleKeyPress(e)}
          />
          <ModalContainer
            padding={this.props.padding}
            onClick={e => this.clickedContainer(e)}
            color={this.props.color}
            windowed={this.props.windowed}
            align={this.props.align}
            justify={this.props.justify}
          >
            {this.props.children}
          </ModalContainer>
        </ModalDialog>
      </div>,
      document.getElementById('modal'),
    );
  }
}

Modal.propTypes = {
  padding: PropTypes.number,
  color: PropTypes.string,
  windowed: PropTypes.bool,
};

Modal.defaultProps = {
  padding: 0,
  color: 'white',
  windowed: false,
};

export default Modal;
