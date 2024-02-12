import React from "react";
import "./Navbar.css";
// import About from "./about";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        {/* <li>
          <a href="/">Blogs</a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
