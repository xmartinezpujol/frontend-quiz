import React, { useState } from 'react';
import Quiz from './containers/Quiz';
import DatabaseLoader from './containers/DatabaseLoader';

import Questions from './data/questions';

import View from './components/Shared/View';

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
