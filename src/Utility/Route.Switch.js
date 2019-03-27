import React from 'react';
import Home from '../Components/Home/Home';
import Content from '../Components/Content/Content';
import State from '../Components/State/State';

const mapLabelToComponent = (input) => {
  switch (input.label) {
    case 'Home':
      return <Home data={input.data} />;
    case 'Content':
      return <Content data={input.data} />;
    case 'State':
      return <State data={input.data} />;
    default:
      break;
  }
}

export default mapLabelToComponent;