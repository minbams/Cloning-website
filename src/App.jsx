import React, { useState } from 'react';
import './App.css'
import Nav from './components/Nav'
import Content from './components/Content';
import Route from './components/Route';
import Promo from './components/Promo';
import Article from './components/Article';
import Library from './components/Library';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Banner from './components/Banner';
import News from './components/News';


function App() {

  return (
    <>
      <Nav />
      <Banner />
      <Content />
      <Route />
      <Promo />
      <News />
      <Article />
      <Library />
      <Contact />
      <Footer />
    </>
  )
}

export default App
