import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MainRouter from "./MainRouter";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainRouter />, document.getElementById('root'));
registerServiceWorker();
