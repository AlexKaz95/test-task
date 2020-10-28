import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

fetch('https://raw.githubusercontent.com/lastw/test-task/master/data/10-items.json')
  .then(resolve => resolve.json())
  .then(data => {
    ReactDOM.render(
      <React.StrictMode>
        <App data={data}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  })



reportWebVitals();
