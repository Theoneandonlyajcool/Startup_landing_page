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

        <div className="Get_in_touch_text">
          <h1>Get in Touch</h1>
          <p>
            Tour function information without cross action media value quickly
            maximize timely deliverables.
          </p>
        </div>

        <form action="">
          {/* Name input and email input */}
          <div className="name_email">
            <input type="text" placeholder="Your name" />
            <input type="mail" placeholder="Email" />
          </div>

          {/* Subject and message area */}
          <div className="subject_message">
            <input type="text" placeholder="subject" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>

          <button className="form_btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Get_in_touch;
