import React from "react";
import "../Styles/About_us.css";
import Button from "./Button";

const About_us = () => {
  return (
    // About us cont
    <div className="Aboutus_cont">
      {/* About us child */}
      <div className="Aboutus_child">
        {/* About first section */}

        <div className="About_first"></div>

        {/* About second section */}

        <div className="About_second">
          {/* About second child */}

          <div className="About_second_child">
            <p>About us</p>
            <h1 className="h">Empowering individuals</h1>
            <p className="p_s">
              Efficiently unleash cross-media tour function information without
              cross action media value. Quickly maximize timely deliverables for
              real-time schemas.
            </p>
            <p className="p_s">
              “Function information without cross action media value.
            </p>
            <Button text={"About us"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_us;
