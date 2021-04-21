import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import { save, load } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';

// Css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import '../node_modules/animate.css/animate.css'
import '../node_modules/react-circular-progressbar/dist/styles.css'
import './assets/css/font-awesome.min.css'
import './assets/css/flaticon.css'
import './assets/css/style.css'
import '../node_modules/react-modal-video/scss/modal-video.scss'

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(logger, save()))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}> 
        <App />
    </Provider>
  </BrowserRouter>,
    document.getElementById('gsp')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
