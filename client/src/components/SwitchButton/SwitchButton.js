import React from "react";
import "./SwitchButton.scss";

const SwitchButton = ({ onClick }) => {
  return (
    <div className="symbol-container" onClick={onClick}>
      <div className="symbol">
        <i className="fas fa-exchange-alt"></i>
      </div>
    </div>
  );
};

export default SwitchButton;
