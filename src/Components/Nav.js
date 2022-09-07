import React, { useEffect, useState } from "react";
import "../style/Nav.css";

const Nav = () => {
  const [show, handleShow] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avtar"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Netflix_meaningful_logo.svg/1024px-Netflix_meaningful_logo.svg.png"
        alt="netflix logo Avtar"
      />
    </div>
  );
};

export default Nav;
