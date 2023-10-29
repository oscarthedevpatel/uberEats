import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import React from "react";

const Navigation = () => {
  return (
    <div className="container">
      {" "}
      {/* Apply the sticky-container class here */}
      <button className="button">ORDER NOW</button>
      <button className="button">ORDER NOW</button>
      <button className="button">ORDER NOW</button>
      <a href="https://t.me/freebaseredpill" className="button">
        Telegram
      </a>
      <button className="button">ORDER NOW</button>
    </div>
  );
};

export default Navigation;
