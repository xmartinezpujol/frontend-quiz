import styled from 'styled-components';
import PropTypes from 'prop-types';

import COLOR_PALETTE from '../Constants';

const Container = {
  styles: {
    margin: '0 14px',
    maxWidth: '100%',
    '@media(min-width: 768px)': {
      margin: '0 auto',
      width: 720,
    },
    '@media(min-width: 992px)': {
      margin: '0 auto',
      width: 920,
    },
    '@media(min-width: 1200px)': {
      margin: '0 auto',
      width: '90vw',
      maxWidth: 1430,
    },
  },
  default: {},
};

const View = styled.div(props => (
  {
    borderRadius: props.round ? props.round : 0,
    display: 'flex',
    width: props.width ? props.width : 'auto',
    height: props.height ? props.height : 'auto',
    background: COLOR_PALETTE[props.type],
    justifyContent: props.justify,
    alignItems: props.align,
    flexDirection: props.direction,
    ...Container[props.container ? 'styles' : 'default'],
    padding: props.padding,
  }
));

View.propTypes = {
  type: PropTypes.string,
  round: PropTypes.number,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  justify: PropTypes.string,
  align: PropTypes.string,
  direction: PropTypes.string,
  container: PropTypes.bool,
  padding: PropTypes.number,
};

export default View;
