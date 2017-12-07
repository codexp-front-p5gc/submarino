import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppSocial from './App-SocialMedia.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppSocial />, document.getElementById('root'));
registerServiceWorker();
