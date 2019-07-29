import React, { useState } from 'react';

import Button from '../Button';

function Answer(props) {
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
      style={{
        color: 'white',
        backgroundColor: getBkgColor(),
        margin: '10px 0',
      }}
      onClick={checkAnswer}
    >
      {props.option}
    </Button>
  );
}

export default Answer;
