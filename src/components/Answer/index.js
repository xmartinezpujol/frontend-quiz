import React, { useState } from 'react';

import { Button, Text } from 'wasabi-kit/lib';

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
    props.onSelect(props.id === props.correct);
  };

  return (
    <Button
      noanim
      style={{
        padding: 10,
        color: 'white',
        backgroundColor: getBkgColor(),
        margin: '2px 0',
      }}
      onClick={checkAnswer}
    >
      <Text type="h4.w">{props.option}</Text>
    </Button>
  );
};

export default Answer;
