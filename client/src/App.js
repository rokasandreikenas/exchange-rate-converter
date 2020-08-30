import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";

const App = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/rates");

      setRates(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <CurrencyConverter rates={rates} />
    </div>
  );
};

export default App;
