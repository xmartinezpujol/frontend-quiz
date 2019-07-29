import styled, { keyframes } from 'styled-components';

import COLOR_PALETTE from '../Constants';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const Loader = styled.div(
  {
    border: '6px solid #f3f3f3',
    borderTop: '6px solid #3ee0d2',
    borderRadius: '50%',
    animation: `${spin} 2s linear infinite`,
  },
  props => ({
    borderTop: `6px solid ${props.color ? COLOR_PALETTE[props.color] : '#3ee0d2'}`,
    width: props.width ? props.width : 50,
    height: props.height ? props.height : 50,
  }),
);

export default Loader;
