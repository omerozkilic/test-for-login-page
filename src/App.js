import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./routes/Login";

import './styles.scss';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
}

export default App;
