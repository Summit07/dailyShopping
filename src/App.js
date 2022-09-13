import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Delivery from "./components/Delivery";
import NonDelivery from "./components/NonDelivery";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Delivery />
      <NonDelivery />
    </div>
  );
}

export default App;
