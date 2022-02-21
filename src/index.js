import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Combinereducer from "../src/reducers/Combinereducer"
import Contactpagereducer from './reducers/Contactpagereducer';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyCzYWh2fzKY6MwfWI9_yMQzyBUpLFWBCA0",
//   authDomain: "resume-builder-8c0b0.firebaseapp.com",
//   projectId: "resume-builder-8c0b0",
//   storageBucket: "resume-builder-8c0b0.appspot.com",
//   messagingSenderId: "1023864966191",
//   appId: "1:1023864966191:web:d1b63e6799dc926ae1cada",
//   measurementId: "G-86P42SYPEW"
// };
const store = createStore(
  Combinereducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

