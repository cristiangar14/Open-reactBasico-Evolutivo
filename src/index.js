import React from 'react';
import ReactDOM from 'react-dom/client';
//Añadimos bootstrap al proyecto
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// ! los estilos propios debe estar debajo de lso de bootstrap
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingFinal from './AppRoutungFinal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <AppRoutingFinal/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
