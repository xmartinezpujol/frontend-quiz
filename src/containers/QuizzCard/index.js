import React, { Component } from 'react';

import Answer from '../../components/Answer';
import Text from '../../components/Text';
import View from '../../components/View';

const questions = [
  {
    id: 1,
    title: 'How many types of rice are there?',
    img: 'https://raw.githubusercontent.com/xmartinezpujol/rn-takeaway/master/assets/img/rice.jpg',
    options: ['A thousand', 'One hundred', 'Ten thousand', 'More than 40,000'],
    correct: 3,
  },
  {
    id: 2,
    title: 'Who brought rice cultivation to the United States?',
    img: 'https://raw.githubusercontent.com/xmartinezpujol/rn-takeaway/master/assets/img/rice.jpg',
    options: ['Chinese railroad workers', 'African slaves', 'Jews expelled from Spain', 'Migrating birds'],
    correct: 1,
  },
];

class QuizzCard extends Component {
  render() {
    const { correct } = questions[0];
    return (
      <View direction="column" className="quizcard">
        <Text type="h1">{questions[0].title}</Text>
        <img src={questions[0].img} />
        {questions[0].options.map((option, index) => (
          <Answer
            key={`answer-${questions[0].id}-${index}`}
            id={index}
            option={option}
            correct={correct}
          />
        ))}
      </View>
    );
  }
}

export default QuizzCard;
