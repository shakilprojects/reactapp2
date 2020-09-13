import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './css/bootstrap.min.css';
import './css/footer-style.css';
import './css/styles.css';
import Home from "./container/test/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Pages/Login";
import Catalogue from "./components/Pages/Catalogoue";
import Web from "./container/Web/Web";


function App() {
  return (
    <div className="App">
        <Web></Web>
    </div>
  );
}

export default App;
