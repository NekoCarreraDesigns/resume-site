import React from "react";
import "./index.css";

function Navbar () {
    return (
        <div>
        <nav className="navigator">
          <button className="nav-button"><a className="nav-link-0" href="/home">Home</a></button>
          <button className="nav-button"><a className="nav-link-1" href="/templates">Templates</a></button>
          <button className="nav-button"><a className="nav-link-2" href="/interview-prep">Interview Prep</a></button>
          <button className="nav-button"><a className="nav-link-3" href="/algorithms">Algorithms</a></button>
        </nav>
        </div>
    )
}
export default Navbar;