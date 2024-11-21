import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from './components/AboutSection'; 
import Program from './components/Program';
import DonasiSection from "./components/Donasi";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Program />
      <DonasiSection />
      <Footer />
    </>
  );
}

export default App;
