import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//ReactDOM: This is the entry point for React to interact with the DOM. It provides methods for rendering React components into the DOM.

//createRoot(): This is a method provided by ReactDOM to create a new root for a React application. It takes an argument, typically a DOM element, where the root will be mounted. In this case, document.getElementById('root') is used to select an HTML element with the id 'root'.

//const root: This creates a constant named root which holds the newly created root. This root can be used to render React components into the DOM.

//React.StrictMode> is a higher-order component provided by React. When you wrap your components with <React.StrictMode>, it activates additional checks and warnings for potential problems in your application's code.