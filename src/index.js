import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// from ./components/*
import HelloWorld from './components/HelloWorld';
import Buttons from './components/Buttons';
import Apples from './components/Apples';

const buttonTexts = {
  buttonText1: "Click it 1!", 
  buttonText2: "Click it 2!", 
  buttonText3: "Click it 3!",
}

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
    <Buttons {...buttonTexts}/>
    <Apples />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
