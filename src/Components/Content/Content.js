import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: { first: 'Ryan', last: 'Udelhoven', middle: 'M',},
        age: 28,
        occupation: 'Software Engineer',
      }
    }
  }

  handleClick = (type) => () => {
    if (type === 'client') {
      console.log('Client: Success')
    } else if (type === 'server') {
      Axios.get('/initial')
        .then((res) => {
          console.log('Server: Success');
          console.log(res.data[0].test_val);
        })
        .catch((error) => { console.log(error); })
    } else if (type === 'reducer') {
      this.props.dispatch({ type: 'TEST_REDUCER', payload: this.state.data })
    } else { console.log('error'); };
  };

  render() {
    return (
      <div className="List">
        <h2>Content</h2>
        <button onClick={this.handleClick('client')}>Client console.log</button>&nbsp;
        <button onClick={this.handleClick('server')}>Server console.log</button>&nbsp;
        <button onClick={this.handleClick('reducer')}>Reducer console.log</button>
      </div>
    );
  }
}

export default connect()(Content);