import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>
        Offered on behalf ExtraHop Networks If you'd prefer not to receive
        future messages, you can{" "}
        <a href="none" className="unsubscribe">
          unsubscribe here
        </a>
        .
      </p>
      <p>424 Washington St, #35091, Brighton, MA 02135.</p>
    </footer>
  );
};

export default Footer;
