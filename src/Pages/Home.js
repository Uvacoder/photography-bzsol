import React from 'react'
import Navbar from "../Navbar";
import Hero from "../Hero";
import Features from "../Features";
import Reviews from "../Reviews";
import Footer from "../Footer";

function Home() {
  return (
    <div id="main" className="App">
      <div className="flex flex-col">
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Reviews></Reviews>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default Home