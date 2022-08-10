import React from 'react'
import Navbar from "../Components/NavbarFrontPage";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";
import Options from '../Components/Options';
import Contact from '../Components/Contact';

function Home() {
  return (
    <div id="main" className="App">
      <div className="flex flex-col">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Options></Options>
      <Reviews></Reviews>
      <Contact></Contact>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default Home