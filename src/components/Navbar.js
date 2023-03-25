import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? 'open' : 'close'}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">
          {' '}
          <span color="#F0F8FF">
            <h1>
              {' '}
              About Me
            </h1>
          </span>{' '}
        </Link>
        <Link to="/experience">
          {' '}
          <span color="#F0F8FF">
            {' '}
            <h1>
              Experience
            </h1>{' '}
          </span>{' '}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
