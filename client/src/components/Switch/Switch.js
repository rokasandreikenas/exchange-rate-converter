import React from "react";
import "./Switch.scss";

const Switch = ({ onClick }) => {
  return (
    <div className="symbol-container" onClick={onClick}>
      <div className="symbol">
        <i className="fas fa-exchange-alt"></i>
      </div>
    </div>
  );
};

export default Switch;
