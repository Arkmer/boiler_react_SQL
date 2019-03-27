import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import routeJSON from '../../Resource/Route.json';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {routeJSON.map((input) => {
          return <Link key={input.id} to={`/${input.route}`}><button>{input.label}</button></Link>;
        })}
      </header>
    );
  }
}

export default Nav;