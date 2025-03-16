
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import Food from "./Food";
import Instamart from "./Instamart";
import Signin from "./Signin";
import Footer from "./Footer";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu
import "./Navbar.css";

function Navbar() {
 
  const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".navlink");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});


  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-header">
          <img src="./logo.png" alt="Logo" className="logo" />
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <input type="text" placeholder="Search Your Favorites" className="input-box" />

        <ul className={`navlink ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className="link" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/food" className="link" onClick={() => setMenuOpen(false)}>Food Delivery</Link>
          </li>
          <li>
            <Link to="/instamart" className="link" onClick={() => setMenuOpen(false)}>Instamart</Link>
          </li>
          <li>
            <Link to="/signin" className="link" onClick={() => setMenuOpen(false)}>Signin</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/instamart" element={<Instamart />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default Navbar;
