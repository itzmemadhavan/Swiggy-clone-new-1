import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <div className="footer-logo">
          <img src="logo2.svg" alt="not found" className="footer-img" />
          <p>©2025 Swiggy Limited</p>
        </div>

        <div className="footer-links">
          <ul>
            <h4>Company</h4>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
            <li>Swiggy Genie</li>
            <li>Minis</li>
          </ul>

          <ul>
            <h4>Contact Us</h4>
            <li>Help & Support</li>
            <li>Partner With Us</li>
            <li>Ride With Us</li>
          </ul>

          <ul>
            <h4>Available In:</h4>
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>

          <ul>
            <h4>Life Of Swiggy</h4>
            <li>Explore With Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>
        </div>
      </footer>

      <hr />
      <h2 className="download-text">For a Better Experience, Download the Swiggy App Now</h2>
    </div>
  );
}

export default Footer;
