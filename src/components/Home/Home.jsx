import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      Home
      <p>
        {" "}
        <Link to="/log-in" className="LoginLink">
          Log In
        </Link>
      </p>
    </div>
  );
}

export default Home;
