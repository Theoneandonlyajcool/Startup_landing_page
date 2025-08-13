import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    //
    <div className="footer_container">
      {/* Child */}
      <div className="footer_child">
        {/* Footer links ans icons */}

        <div className="footer_links">
          <div className="image_links">
            <div>
              <img
                src="/Images/preview.colorlib.com-1754745056663/12_logo.png"
                alt=""
              />
            </div>

            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Pages</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Icons */}
          <div className="footer_icons">
            <div className="f_icons">
              <i class="fa-brands fa-facebook-f"></i>
            </div>

            <div className="f_icons">
              <i class="fa-brands fa-twitter"></i>
            </div>

            <div className="f_icons">
              <i class="fa-brands fa-instagram"></i>
            </div>

            <div className="f_icons">
              <i class="fa-brands fa-google-plus-g"></i>
            </div>
          </div>
        </div>
        {/* Copyright and line */}

        <div className="f_line"></div>

        <div className="footer_copyright">
          <p>
            Copyright <i class="fa-regular fa-copyright"></i> 2025 all rights
            reserved | this template is made with{" "}
            <i class="fa-regular fa-heart"></i> by
            <span> Colorlib</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
