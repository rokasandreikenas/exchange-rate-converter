import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrencyConverter from "./components/CurrencyConverter";
import Header from "./components/Header";
import "./App.scss";

const App = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/rates");

      setRates(result.data);
    };

    fetchData();
  }, []);

  if (rates.length === 0) {
    return <div>...</div>;
  }

  return (
    <section className="content">
      <div className="container">
        <div className="main">
          <Header />
          <CurrencyConverter rates={rates} />
        </div>
      </div>
    </section>
  );
};

export default App;
