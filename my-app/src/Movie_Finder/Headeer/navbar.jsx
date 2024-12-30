import React from "react";
import "./Navigation.css"; // Assuming a CSS file for styling

function Navigation() {
  return (
    <nav>
      <ul className="navigation-bar">
        <li>
          <h1>Movie-Finder</h1>
        </li>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <div className="button-group">
            <button>Sign-Up</button>
            <button>Login</button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
