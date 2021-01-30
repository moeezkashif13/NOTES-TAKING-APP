import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import reducer from './store/reducer';

const firebaseConfig = {
  apiKey: "AIzaSyAPuF9HF-HXnOuKHo4iy7Wy3TlFbSRUZyY",
      authDomain: "notestakingapp-b0b03.firebaseapp.com",
      projectId: "notestakingapp-b0b03",
      storageBucket: "notestakingapp-b0b03.appspot.com",
      messagingSenderId: "875439472983",
      appId: "1:875439472983:web:a158b71ecb0c49f583fe12",
      measurementId: "G-NHXG259EC3"
};
const store = createStore(reducer);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// // var firebaseConfig = {
//    
//   };

ReactDOM.render(
  <Provider store={store}>

    <App />
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
