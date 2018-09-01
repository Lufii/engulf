import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Engulf from './view/engulf.jsx';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Engulf />, document.getElementById('root'));

registerServiceWorker();
