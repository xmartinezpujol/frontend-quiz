import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import Answer from '../../components/Answer';
import CodeBlock from '../../components/CodeBlock';
import View from '../../components/Shared/View';

export const StyledCardContainer = styled(View)`
  width: 100%;
  width: 300px;
`;

function QuizCard(props) {
  const [tries, setAttempt] = useState(0);
  const [isCorrect, setStatus] = useState(false);

  useEffect(() => {
    if (isCorrect) {
      props.onCompleteQuestion(props.question.id, tries);
    }
  }, [tries]);

  const {
    question: {
      correct,
      detail,
      id,
      options,
    },
  } = props;
  return (
    <StyledCardContainer
      direction="column"
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
          onSelect={(status) => {
            setAttempt(tries + 1);
            setStatus(status);
          }}
        />
      ))}
    </StyledCardContainer>
  );
}

export default QuizCard;
