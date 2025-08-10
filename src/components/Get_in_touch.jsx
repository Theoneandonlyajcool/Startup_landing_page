import React from "react";
import "../Styles/Get_in_touch.css"; // Importing the CSS file for styling
import Button from "./Button";

const Get_in_touch = () => {
  return (
    // cont
    <div className="touch_container">
      {/* child */}
      <div className="touch_child">
        {/* Text */}

        <div>
          <h1>Get in Touch</h1>
          <p>
            Tour function information without cross action media value quickly
            maximize timely deliverables.
          </p>
        </div>

        <form action="">
          {/* Name input and email input */}
          <div>
            <input type="text" />
            <input type="text" />
          </div>

          {/* Subject and message area */}
          <div>
            <input type="text" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>

          <Button></Button>
        </form>
      </div>
    </div>
  );
};

export default Get_in_touch;
