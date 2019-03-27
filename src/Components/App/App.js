import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav.js';
import jsonRoutes from '../../Resource/Route.json';
import mapLabelToComponent from '../../Utility/Route.Switch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Something',
      componentData: jsonRoutes,
    }
  }

  render() {
    const temp = {
      text: 'Something',
      componentData: jsonRoutes,
    }
    return (
      <Router>
        <React.Fragment>
          <Nav title="Sick Boiler Plate Code"></Nav>
          {this.state.componentData.map((input, i) => {
            return <Route key={i} path={"/" + input.route} render={() => {
              return mapLabelToComponent(input);
            }} />;
          })}
        </React.Fragment>
      </Router>
    );
  }
}

export default connect()(App);
