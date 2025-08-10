import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    // Cont
    <div className="Header_cont">
      {/* Child */}

      <div className="Header_child">
        {/* Logo */}

        <div className="logo">
          <img
            src="/Images/preview.colorlib.com-1754745056663/12_logo.png"
            alt=""
          />
        </div>
        {/* Header Links */}

        <div className="links">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>
              Pages <i className="fa-solid fa-chevron-down icons"></i>
            </li>
            <li>
              Blog <i className="fa-solid fa-chevron-down icons"></i>
            </li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Say hello */}

        <div className="hello">
          <p>Say hello</p>

          {/* Line */}
          <div className="line"></div>
        </div>

        <div className="menu">
          <p>Menu</p>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
