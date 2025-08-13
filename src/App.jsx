import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About_us from "./components/About_us";
import Get_in_touch from "./components/Get_in_touch";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About_us />
      <Get_in_touch />
      <Footer />
    </div>
  );
};

export default App;
