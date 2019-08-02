import React, { useState } from 'react';

import View from '../../components/View';

import QuizCard from '../QuizCard';

import {
  StyledArrow,
} from './styles';

const PREV_QUESTION = 'prev';
const NEXT_QUESTION = 'next';

const questions = [
  {
    id: 1,
    detail: `
  ### What will be printed on the console?
  \`\`\`js
  (function() {
     var a = b = 5;
  })();
  console.log(b);
  \`\`\`
  `,
    options: ['undefined', '5', 'error', 'Im a teapot'],
    correct: 1,
  },
  {
    id: 2,
    detail: `
  ### What will log out here?
  \`\`\`js
  function test() {
     console.log(a); 
     console.log(foo());
  
     var a = 1;
     function foo() {
        return 2;
     }
  }
  test();
  \`\`\`
  `,
    options: ['undefined, undefined', '1, 2', 'undefined, 2', '1, undefined'],
    correct: 2,
  },
];

function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(1);

  function getCurrentQuestion() {
    return questions.filter(question => question.id === currQuestion);
  }

  function setCurrentQuestion(direction) {
    return direction === PREV_QUESTION
      ? setCurrQuestion(currQuestion - 1)
      : setCurrQuestion(currQuestion + 1);
  }

  return (
    <View direction="column" align="center" height="100vh" type="rice">
      <View height={50} type="lightTea" />
      <View align="center" padding={10} type="rice">
        <StyledArrow
          disabled={currQuestion === 1}
          onClick={() => setCurrentQuestion(PREV_QUESTION)}
          type="night"
        >
          ◀
        </StyledArrow>
        {getCurrentQuestion().map(question => (
          <QuizCard
            key={`question-${question.id}`}
            question={question}
            onAnswerSelected={id => setCurrQuestion(id)}
          />
        ))}
        <StyledArrow
          disabled={currQuestion === questions[questions.length - 1].id}
          onClick={() => setCurrentQuestion(NEXT_QUESTION)}
          type="night"
        >
          ▶
        </StyledArrow>
      </View>
    </View>
  );
}

export default Quiz;
