import React, { Component } from 'react';
// import Axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment>
        <h3>Display: {this.props.data}</h3>
      </React.Fragment>
    );
  }
}

export default connect()(Home);