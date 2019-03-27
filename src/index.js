import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import storeInstance from './Redux/Store';

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();