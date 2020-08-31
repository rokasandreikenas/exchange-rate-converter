import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Currency Converter</h1>
      <p className="header-date">{new Date().toDateString()}</p>
    </header>
  );
};

export default Header;
