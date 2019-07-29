import React from 'react';
import styled from 'styled-components';

import COLOR_PALETTE from '../Constants';

const IconStyled = styled.i(
  {},
  props => ({
    fontSize: props.size ? props.size : 22,
    width: props.width ? props.width : 'auto',
    color: props.color ? COLOR_PALETTE[props.color] : 'night',
  }),
);

const Icon = props => (
  <IconStyled
    size={props.size}
    width={props.width}
    color={props.color}
    className={`${props.font} ${props.font}-${props.name}`}
    aria-hidden="true"
    style={props.style}
  />
);

export default Icon;
