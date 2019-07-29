import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import Button from './Button';

import COLOR_PALETTE from '../Constants';

const InputContainer = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    '> i': {
      position: absolute;
      right: 25;
    }
  }, props => ({
    minWidth: props.mWidth ? props.mWidth : 'auto',
  }),
`;

const shapeStyle = {
  round: '200px',
  square: 0,
  default: 6,
};

const InputBox = styled.input(
  {
    fontFamily: 'Poppins, sans-serif',
    flex: '1 0 auto',
    border: '2px solid #F4F4F4',
    height: 50,
    fontSize: 16,
    margin: 0,
    display: 'inline-block',
    padding: '10px 20px',
    borderRadius: 6,
    color: '#000',
    transition: 'all 1s',
    ':hover': {
      opacity: 0.8,
    },
    ':focus': {
      outline: 0,
      borderColor: '#6E7A83',
    },
    ':disabled': {
      opacity: 0.3,
      cursor: 'not-allowed',
    },
  },
  props => ({
    borderColor: COLOR_PALETTE[props.borderColor],
    borderRadius: props.shape ? shapeStyle[props.shape] : shapeStyle.default,
    ':focus': {
      borderColor: COLOR_PALETTE[props.borderFocus],
    },
  }),
);

const Icon = styled.i`
  position: absolute;
  right: 15px;
`;

const loadingAnimation = keyframes({
  '0%': { transform: 'rotate(0deg)', opacity: 0.5 },
  '50%': { opacity: 1 },
  '100%': { transform: 'rotate(360deg)', opacity: 0.5 },
});

const LoadingIcon = styled.i`
  position: absolute;
  right: 15px;
  transform: rotate(0deg);
  color: #6d6d6d;
  font-size: 22px;
  animation: ${loadingAnimation} 2s infinite;
`;

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togglePasswordStatus: this.props.type,
    };
    this.toggleType = this.toggleType.bind(this);
  }

  toggleType() {
    this.setState(prevState => ({
      togglePasswordStatus: prevState.togglePasswordStatus === 'password'
        ? 'text'
        : 'password',
    }));
  }

  render() {
    const {
      outerStyle,
      togglePassword,
      input,
      placeholder,
      required,
      borderColor,
      borderFocus,
      shape,
      loading,
      type,
      icon,
      min,
      max,
    } = this.props;
    const { togglePasswordStatus } = this.state;
    return (
      <InputContainer style={outerStyle} togglePassword={togglePassword}>
        <InputBox
          {...this.props}
          {...typeof input !== 'undefined' ? input : null}
          placeholder={placeholder}
          required={required}
          borderColor={borderColor}
          borderFocus={borderFocus}
          shape={shape}
          loading={loading}
          type={type === 'password' && togglePassword ? togglePasswordStatus : type}
          min={min}
          max={max}
        />
        {togglePassword && type === 'password' && !loading && !icon && (
          <Button
            type="transparent"
            iFont="fa"
            icon={togglePasswordStatus === 'password' ? 'eye' : 'eye-slash'}
            iconSize={20}
            style={{
              padding: '0px 15px',
              position: 'absolute',
              right: 0,
            }}
            border
            shape="round"
            bold
            template="link"
            onClick={this.toggleType}
          />
        )}
        {icon && !loading && <Icon className={icon} />}
        {loading && <LoadingIcon className="fa fa-repeat" />}
      </InputContainer>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  borderColor: PropTypes.string,
  borderFocus: PropTypes.string,
  shape: PropTypes.string,
  size: PropTypes.string,
  loading: PropTypes.bool,
  togglePassword: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  borderColor: 'spacewhite',
  borderFocus: 'blue',
  shape: 'default',
  size: 'medium',
  loading: false,
  togglePassword: false,
};

export default Input;
