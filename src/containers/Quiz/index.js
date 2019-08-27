import React, { useState, useEffect } from 'react';

import { Text, View } from 'wasabi-kit/lib';
import QuizCard from '../QuizCard';

import StyledArrow from './styles';

const PREV_QUESTION = 'prev';
const NEXT_QUESTION = 'next';
const TIME_TO_SWITCH_QUESTIONS = 1000;

const randomize = () => 0.5 - Math.random();

function Quiz(props) {
  const [currQuestion, setCurrQuestion] = useState(1);
  const [score, setScore] = useState([]);
  const [questions, setQuestions] = useState(() => props.data.sort(randomize));
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    // randomize questions onload
    if (questions) {
      setLoader(false);
    }
  }, [questions, isLoading]);

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
        {questions && currQuestion > questions.length &&
          <View
            direction="column"
            width="100vw"
            height="100vh"
            align="center"
            justify="center"
          >
            <Text type="h1">
              {`Your score: ${getScore()} / ${questions.length}`}
            </Text>
            <span
              role="img"
              aria-label="score"
              style={{ fontSize: 24 }}
            >
              🎉
            </span>
          </View>
        }
        {questions && currQuestion <= questions.length &&
          <QuizCard
            isLoading={isLoading}
            key={`question-${questions[currQuestion - 1].id}`}
            question={questions[currQuestion - 1]}
            onCompleteQuestion={(id, tries) => handleScore(id, tries)}
          />
        }
        {props.navigation &&
          <StyledArrow
            side="right"
            disabled={currQuestion === questions[questions.length - 1].id}
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
