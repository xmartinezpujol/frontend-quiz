import React, { useState } from 'react';

import Button from '../Button';
import Text from '../Text';

const Answer = (props) => {
  const [scored, setScore] = useState(null);

  const getBkgColor = () => {
    switch (scored) {
      case false:
        return 'orangered';
      case true:
        return 'lightgreen';
      default:
        return 'black';
    }
  };

  const checkAnswer = () => {
    if (props.id === props.correct) {
      setScore(true);
    } else {
      setScore(false);
    }
  };

  return (
    <Button
      noanim
      style={{
        padding: '0 10px',
        color: 'white',
        backgroundColor: getBkgColor(),
        margin: '10px 0',
      }}
      onClick={checkAnswer}
    >
      <Text type="h3.w">{props.option}</Text>
    </Button>
  );
};

export default Answer;
