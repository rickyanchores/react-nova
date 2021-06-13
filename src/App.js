import React from "react";
import ImageSlider from "./components/Gallery/ImageSlider";
import { SliderData } from "./components/Gallery/SliderData";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">

      <Navbar />

      <h1>React-Nova</h1>
      <p>Personal React Boiler Plate</p>
      <h3>This contains:</h3>
      <ul>
        <li>Basic Structure</li>
        <li>Basic Components</li>
        <li>SASS</li>
      </ul>
      <ImageSlider slides={SliderData}/>
    </div>
  );
}

export default App;
