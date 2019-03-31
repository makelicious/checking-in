import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AddForm from './components/Form';
import Questionnaire from './components/Questionnaire';
import Stats from './components/Stats';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/stats" component={Stats} />
        <Route path="/questionnaire" component={Questionnaire} />
        <Route path="/" component={AddForm} />
      </Router>
    );
  }
}

export default App;
