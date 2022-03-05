import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Contactpagereducer from './reducers/Contactpagereducer';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import thunk from 'redux-thunk';
export const firebaseConfig = {
  apiKey: "AIzaSyAGKD97vwd0W0NirxIdB0PCB4IYdjIJWfI",
  authDomain: "justfortest-b6aae.firebaseapp.com",
  projectId: "justfortest-b6aae",
  storageBucket: "justfortest-b6aae.appspot.com",
  messagingSenderId: "1061088728648",
  appId: "1:1061088728648:web:4618ecf88249f72599aa7d",
  measurementId: "G-WDM6NLE5C0",
};
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);

const store = createStore(
  Contactpagereducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

