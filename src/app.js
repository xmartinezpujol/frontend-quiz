import React, { useState } from 'react';

import { View } from 'wasabi-kit/lib';

import Quiz from './containers/Quiz';
import DatabaseLoader from './containers/DatabaseLoader';
import Questions from './data/questions';

function App() {
  const [questions, setQuestions] = useState([]);

  return (
    <View container direction="column" align="center">
      <Quiz data={questions.length ? questions : Questions} navigation={false} />
      <DatabaseLoader onDatabaseLoaded={data => setQuestions(data)} />
      <div id="modal" />
    </View>
  );
}

export default App;
