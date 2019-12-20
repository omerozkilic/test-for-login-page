import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './styles.scss';


function Home() {
  return (
    <div className="Home">
      <Header></Header>
      <h2>Home Dashboard</h2>
      <Footer></Footer>
    </div>
  );
}

export default Home;
