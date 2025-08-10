import React from "react";
import "../Styles/Button.css";

const Button = (props) => {
  const { text } = props;
  return (
    <div>
      <button className="btn">{text}</button>
    </div>
  );
};

export default Button;
