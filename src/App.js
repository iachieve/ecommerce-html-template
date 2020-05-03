import React from 'react';

import './scss/base.scss';

import Header from './components/layout/header';
import Home from './pages/Home';
import Footer from "./components/layout/footer/Footer";




function App() {
  return (
   <>
    <Header/>
    <Home/>
    <Footer/>
   </>
  );
}

export default App;
