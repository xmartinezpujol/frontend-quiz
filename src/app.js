import React, { Fragment } from 'react';
import Quiz from './containers/Quiz';

function App() {
  return (
    <Fragment>
      <Quiz navigation={false} />
      <div id="modal" />
    </Fragment>
  );
}

export default App;
