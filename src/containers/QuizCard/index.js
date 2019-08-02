import React from 'react';
import ReactMarkdown from 'react-markdown';

import Answer from '../../components/Answer';
import CodeBlock from '../../components/CodeBlock';
import View from '../../components/View';

function QuizCard(props) {
  const {
    correct,
    detail,
    id,
    options,
  } = props.question;
  return (
    <View
      direction="column"
      width={300}
      align="space-between"
      justify="space-between"
      type="white"
      padding={10}
      round={10}
    >
      <ReactMarkdown
        source={detail}
        renderers={{ code: CodeBlock }}
      />
      {options.map((option, index) => (
        <Answer
          key={`answer-${id}-${index}`}
          id={index}
          option={option}
          correct={correct}
        />
      ))}
    </View>
  );
}

export default QuizCard;
