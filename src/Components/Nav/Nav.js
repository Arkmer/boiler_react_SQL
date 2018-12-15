import React, { Component } from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = { title: props.title }
  }

  render() {
    return (
      <header className="Nav-Header">
        <h1>{this.state.title}</h1>
        <Link to="/content">Content</Link>
      </header>
    );
  }
}

export default Nav;