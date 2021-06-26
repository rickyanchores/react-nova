import React from "react";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Grid from "./components/Grid/Grid";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Hero from "./components/Hero/Hero";

import ImageSlider from "./components/Gallery/ImageSlider";
import { SliderData } from "./components/Gallery/SliderData";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <h1>React-Nova</h1>
      <p>Personal React Boiler Plate</p>
      <h3>This contains:</h3>
      <ul>
        <li>Basic Structure</li>
        <li>Basic Components</li>
        <li>SASS</li>
      </ul>
      <Hero />
      <ImageSlider slides={SliderData}/>
      <Banner />
      <Shop />
      <Contact />
      <Grid />
      <ImageSlider slides={SliderData}/>
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
