import React, { Component } from 'react';
import './Content.css';
import Axios from 'axios';

class Content extends Component {
  constructor(props){
    super(props);
      this.state = {

      }
  }
  
  handleClick = (type) => () => {
    if(type === 'client') {
      console.log('Client: Success')
    } else if(type === 'server') {
      Axios.get('/initial')
      .then((res) => {
        console.log('Server: Success');
        console.log(res.data[0].test_val);
      })
      .catch((error) => { console.log(error); })
    } else { console.log('error'); };
  };

  render() {
    return (
      <div className="List">
        <p>Content</p>
        <button onClick={this.handleClick('client')}>Client console.log</button>&nbsp;
        <button onClick={this.handleClick('server')}>Server console.log</button>
      </div>
    );
  }
}

export default Content;