import styled, { keyframes } from 'styled-components';

import COLOR_PALETTE from '../../Constants';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  animation: ${spin} 2s linear infinite;
  border-top: 6px solid ${props =>
    props.color
      ? COLOR_PALETTE[props.color]
      : '#3ee0d2'};
  width: ${props =>
    props.width
      ? props.width
      : 50}px;
  height: ${props =>
    props.height
      ? props.height
      : 50}px;
`;

export default Loader;
