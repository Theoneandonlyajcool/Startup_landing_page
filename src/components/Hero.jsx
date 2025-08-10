import React from "react";
import "../Styles/Hero.css";
import Button from "./Button";

const Hero = () => {
  console.log(screen.width);
  return (
    // cont
    <div className="Hero_cont">
      {/* child */}
      <div className="Hero_child">
        {/* Text */}

        <div className="Hero_text">
          <p>
            Startup you can build a website online using the Bootstrap builder.
          </p>
        </div>

        {/* button */}
        <Button text={"visit our works"} />
      </div>
    </div>
  );
};

export default Hero;
