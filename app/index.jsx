import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GameRoom from './components/gameroom/GameRoom';
// import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
// import * as serviceWorker from './serviceWorker';

if (window.location.href == "https://tinder-project.glitch.me/") {
  ReactDOM.render(

      <App />,

    document.getElementById('main')
  );
} else if (window.location.href == "https://tinder-project.glitch.me/gameroom"){
  ReactDOM.render(

      <GameRoom/>,

    document.getElementById('main')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

