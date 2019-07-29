import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = (props) => {
  const styles = {
    h1: {
      fontSize: 20,
      color: '#36424A',
      fontWeight: 900,
      '& strong': { color: props.accentColor },
      '@media(min-width: 768px)': {
        fontSize: 24,
      },
      '@media(min-width: 992px)': {
        fontSize: 28,
      },
      '@media(min-width: 1200px)': {
        fontSize: 36,
      },
    },
    'h1.w': {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 900,
      '@media(min-width: 768px)': {
        fontSize: 24,
      },
      '@media(min-width: 992px)': {
        fontSize: 28,
      },
      '@media(min-width: 1200px)': {
        fontSize: 36,
      },
    },
    h2: {
      fontSize: 16,
      color: '#36424A',
      fontWeight: 900,
      '& strong': { color: props.accentColor },
      '@media(min-width: 768px)': {
        fontSize: 18,
      },
      '@media(min-width: 992px)': {
        fontSize: 22,
      },
      '@media(min-width: 1200px)': {
        fontSize: 25,
      },
    },
    'h2.1': {
      fontSize: 16,
      color: '#36424A',
      fontWeight: 700,
      '@media(min-width: 768px)': {
        fontSize: 18,
      },
      '@media(min-width: 992px)': {
        fontSize: 22,
      },
      '@media(min-width: 1200px)': {
        fontSize: 25,
      },
    },
    'h2.2': {
      fontSize: 16,
      color: '#6E7A83',
      fontWeight: 700,
      '@media(min-width: 768px)': {
        fontSize: 18,
      },
      '@media(min-width: 992px)': {
        fontSize: 22,
      },
      '@media(min-width: 1200px)': {
        fontSize: 25,
      },
    },
    'h2.w': {
      fontSize: 16,
      color: '#FFFFFF',
      fontWeight: 900,
      '@media(min-width: 768px)': {
        fontSize: 18,
      },
      '@media(min-width: 992px)': {
        fontSize: 22,
      },
      '@media(min-width: 1200px)': {
        fontSize: 25,
      },
    },
    h3: {
      fontSize: 14,
      color: '#36424A',
      fontWeight: 900,
      '& strong': { color: props.accentColor },
      '@media(min-width: 768px)': {
        fontSize: 14,
      },
      '@media(min-width: 992px)': {
        fontSize: 16,
      },
      '@media(min-width: 1200px)': {
        fontSize: 18,
      },
    },
    'h3.1': {
      fontSize: 14,
      color: '#6E7A83',
      fontWeight: 700,
      '@media(min-width: 768px)': {
        fontSize: 14,
      },
      '@media(min-width: 992px)': {
        fontSize: 16,
      },
      '@media(min-width: 1200px)': {
        fontSize: 18,
      },
    },
    'h3.w': {
      fontSize: 14,
      color: '#FFFFFF',
      fontWeight: 700,
      '@media(min-width: 768px)': {
        fontSize: 14,
      },
      '@media(min-width: 992px)': {
        fontSize: 16,
      },
      '@media(min-width: 1200px)': {
        fontSize: 18,
      },
    },
    h4: {
      fontSize: 10,
      color: '#6E7A83',
      fontWeight: 400,
      '& strong': { color: props.accentColor },
      '@media(min-width: 768px)': {
        fontSize: 12,
      },
      '@media(min-width: 992px)': {
        fontSize: 14,
      },
      '@media(min-width: 1200px)': {
        fontSize: 16,
      },
    },
    'h4.w': {
      fontSize: 10,
      color: '#FFFFFF',
      fontWeight: 400,
      '@media(min-width: 768px)': {
        fontSize: 12,
      },
      '@media(min-width: 992px)': {
        fontSize: 14,
      },
      '@media(min-width: 1200px)': {
        fontSize: 16,
      },
    },
    h5: {
      fontSize: 11,
      fontWeight: 900,
      textTransform: 'uppercase',
      '& strong': { color: props.accentColor },
      '@media(min-width: 768px)': {
        fontSize: 16,
      },
      '@media(min-width: 992px)': {

      },
      '@media(min-width: 1200px)': {

      },
    },
    'h5.w': {
      fontSize: 16,
      fontWeight: 900,
      textTransform: 'uppercase',
      color: '#FFFFFF',
    },
    p1: {
      fontSize: 16,
      color: '#36424A',
      fontWeight: 300,
      whiteSpace: 'pre-line',
      '& strong': { color: props.accentColor },
    },
    'p1.w': {
      fontSize: 16,
      color: '#FFFFFF',
      fontWeight: 300,
      whiteSpace: 'pre-line',
    },
    p2: {
      fontSize: 13,
      color: '#B6BABD',
      fontWeight: 400,
    },
    p3: {
      fontSize: 12,
      color: '#B6BABD',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontWeight: 400,
    },
    p4: {
      fontSize: 12,
      color: '#B6BABD',
      fontWeight: 400,
    },
    p5: {
      fontSize: 12,
      color: '#6E7A83',
      fontWeight: 400,
    },
    span: {
      fontSize: 16,
      color: '#36424A',
      fontWeight: 300,
      whiteSpace: 'pre-line',
      margin: '5px 0',
    },
  };
  let propOrDefault = '';

  if (props.type.substring(0, 1) === 'h') {
    propOrDefault = typeof (styles[props.type]) !== 'undefined'
      ? props.type.substring(0, 2)
      : styles.p1;
  }
  if (props.type.substring(0, 1) === 'p') {
    propOrDefault = typeof styles[props.type] !== 'undefined'
      ? props.type.substring(0, 1)
      : styles.p1;
  }
  if (props.type.substring(0, 1) === 's') {
    propOrDefault = typeof styles[props.type] !== 'undefined'
      ? props.type.substring(0, 4)
      : styles.p1;
  }

  const TextGenerator = styled(propOrDefault)(styles[props.type]);
  return (
    <TextGenerator style={props.style}>
      {props.children}
    </TextGenerator>
  );
};

Text.propTypes = {
  accentColor: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Text;
