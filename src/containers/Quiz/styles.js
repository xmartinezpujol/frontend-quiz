import styled from 'styled-components';
import { Button } from 'wasabi-kit/lib';

const StyledArrow = styled(Button)`
  position: absolute;
  top: 10px;
  ${props => props.side}: 0;
  height: 80px;
  width: 40px;
  color: white;
  padding: 10px;
  justify-content: center;
`;

export default StyledArrow;
