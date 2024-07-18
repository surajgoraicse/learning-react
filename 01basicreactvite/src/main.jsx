import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const element = <h1>hello this is suraj <a href="https://www.google.com">Click me</a></h1>;
const newElement = React.createElement(
  'div',
  { type: 'text', class: 'suraj' },
  'Hello motherfucker'
)


ReactDOM.createRoot(document.getElementById('root')).render(
 
)
