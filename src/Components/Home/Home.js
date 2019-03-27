import React, { Component } from 'react';
// import Axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>Home</h2>
        <pre>{JSON.stringify(this.state.data)}</pre>
        <p>Hello, {this.state.data.name}!</p>
      </React.Fragment>
    );
  }
}

export default connect()(Home);