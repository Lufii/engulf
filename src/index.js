import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './nav.jsx';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Nav />, document.getElementById('root'));

registerServiceWorker();
