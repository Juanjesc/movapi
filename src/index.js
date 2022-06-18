import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLaughBeam } from '@fortawesome/free-solid-svg-icons'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

  <App />
  <div className="creditos">
        <p>By: Juan Jesús Sedano  
        <span> 
         <FontAwesomeIcon icon={faLaughBeam}/>
        </span>
        </p>
      </div>
  </div>

);


