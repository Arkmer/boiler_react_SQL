import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav.js';
import Content from '../Content/Content.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav title="Sick Boiler Plate Code"></Nav>
          <Route path="/content" component={Content} />
        </div>
      </Router>
    );
  }
}

export default App;