import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Link to="/log-in" className="LoginLink">
        Log In
      </Link>
      <Footer />
    </div>
  );
}

export default Home;
