import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FixedVars from './FixedVars';
import DaysVars from './DaysVars';
import DaysPrice from './DaysPrice';
import Final from './Final';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div className="conCol">
      <div className="conRow">
        <FixedVars />
        <div className="line" />
        <DaysVars />
        <div className="line" />
        <DaysPrice />
      </div>
      <div>
        <Final />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
