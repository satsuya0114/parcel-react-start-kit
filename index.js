import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './App';
 
const supportsHistory = 'pushState' in window.history;
const render = () => {
  // const App = require('./containers').default;
  ReactDOM.render(
    <AppContainer>
      <div>
        <App />
      </div>
    </AppContainer>,
    document.getElementById('app')
  );
};

render();

// migrate by this guide
// https://github.com/gaearon/react-hot-loader/tree/master/docs#migration-to-30
if (module.hot) {
  module.hot.accept('./containers/', () => {
    render();
  });
}

// import React from 'react';
// import { render } from 'react-dom';

// render(
//     <div>Hello React</div>,
//     document.getElementById('app')
// );