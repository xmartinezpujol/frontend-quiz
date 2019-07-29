import React, { Fragment } from 'react';
import Home from './containers/Home';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Home />
        <div id="modal" />
      </Fragment>
    );
  }
}

export default App;
