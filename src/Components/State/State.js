import React, { Component } from 'react';
// import Axios from 'axios';
import { connect } from 'react-redux';
import Display from '../Display/Display';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ryan',
      alpha0: {
        level: 0,
        alpha1: {
          level: 1,
        },
      },
      bravo0: {
        level: 0,
        bravo1: {
          level: 1,
        },
      },
    }
  }

  handleChangeFor = (propertyName) => (event) => {
    switch (propertyName) {
      case 'name':
        this.setState({
          name: event.target.value,
        })
        this.props.dispatch({ type: 'TEST_REDUCER', payload: this.state.data })
        break;
      case 'alpha0':
        this.setState({
          alpha0: {
            ...this.state.alpha0,
            level: event.target.value,
          }
        })
        break;
      case 'alpha1':
        this.setState({
          alpha0: {
            ...this.state.alpha0,
            alpha1: {
              ...this.state.alpha1,
              level: event.target.value,
            }
          }
        })
        break;
      default:
        return null;
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>State</h2>
        <p>Hello, {this.state.name}!</p>
        <pre>{JSON.stringify(this.state)}</pre>
        Name <input value={this.state.name} onChange={this.handleChangeFor('name')} />
        Alpha0 <input value={this.state.alpha0.level} onChange={this.handleChangeFor('alpha0')} />
        Alpha1 <input value={this.state.alpha0.alpha1.level} onChange={this.handleChangeFor('alpha1')} />
        <Display data={this.state.alpha0.level}/>
      </React.Fragment>
    );
  }
}

export default connect()(Home);