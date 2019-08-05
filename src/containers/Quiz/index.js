import React, { useState } from 'react';
import Questions from './../../data/questions';
import Text from '../../components/Text';
import View from '../../components/View';
import QuizCard from '../QuizCard';

import {
  StyledArrow,
} from './styles';

const PREV_QUESTION = 'prev';
const NEXT_QUESTION = 'next';
const TIME_TO_SWITCH_QUESTIONS = 1000;

function Quiz(props) {
  const [currQuestion, setCurrQuestion] = useState(1);
  const [score, setScore] = useState([]);

  function getCurrentQuestion() {
    return Questions.filter(question => question.id === currQuestion);
  }

  function setCurrentQuestion(direction) {
    return direction === PREV_QUESTION
      ? setCurrQuestion(currQuestion - 1)
      : setCurrQuestion(currQuestion + 1);
  }

  function handleScore(id, tries) {
    setTimeout(() =>
      setCurrQuestion(currQuestion + 1), TIME_TO_SWITCH_QUESTIONS);
    return tries > 1
      ? setScore([...score, 0])
      : setScore([...score, 1]);
  }

  function getScore() {
    return score.filter(point => point === 1).length;
  }

  return (
    <View direction="column" align="center" type="rice">
      <View padding={10} type="rice">
        {props.navigation &&
          <StyledArrow
            side="left"
            disabled={currQuestion === 1}
            onClick={() => setCurrentQuestion(PREV_QUESTION)}
            type="night"
          >
            ◀
          </StyledArrow>
        }
        {getCurrentQuestion().length === 0 &&
          <View
            direction="column"
            width="100vw"
            height="100vh"
            align="center"
            justify="center"
          >
            <Text type="h1">
              {`Your score: ${getScore()} / ${Questions.length}`}
            </Text>
            <Text
              role="img"
              aria-label="score"
              type="span"
              style={{ fontSize: 24 }}
            >
              🎉
            </Text>
          </View>
        }
        {getCurrentQuestion().map(question => (
          <QuizCard
            key={`question-${question.id}`}
            question={question}
            onCompleteQuestion={(id, tries) => handleScore(id, tries)}
          />
        ))}
        {props.navigation &&
          <StyledArrow
            side="right"
            disabled={currQuestion === Questions[Questions.length - 1].id}
            onClick={() => setCurrentQuestion(NEXT_QUESTION)}
            type="night"
          >
            ▶
          </StyledArrow>
        }
      </View>
    </View>
  );
}

export default Quiz;
