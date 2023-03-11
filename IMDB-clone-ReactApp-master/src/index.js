import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Favicon from 'react-favicon'

ReactDOM.render(
  <div>

  <Favicon url='<FontAwesomeIcon icon="fa-brands fa-imdb" />' />
    <App />
    
  </div> ,
  document.getElementById('root')
)
