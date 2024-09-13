import React from "react";
import Header from "../components/Header";
import ServicesComponent from "../components/ServicesComponent";
import About from "../components/About";

function Home() {
  return (
    <div>
      <Header />
      <ServicesComponent />
      <About />
    </div>
  );
}

export default Home;
