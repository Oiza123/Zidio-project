import React from "react";

function Header() {
  return (
    <div>
      <header>
        <h1>
          <img src=""></img>Zidio <br />
          Learning
        </h1>
        <button>
          <p>Quick search</p>
        </button>
        <button>
          <p>User 1</p>
        </button>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <hr></hr>
      </header>
    </div>
  );
}

export default Header;
