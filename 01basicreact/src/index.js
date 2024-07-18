import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Chai from './chai'
import Greet from './Greet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Greet />
    <App />
    <Chai />
  </>
);
