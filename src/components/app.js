import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './landing-page.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={LandingPage} />
      </React.Fragment>
    );
  }
}

export default App;
