import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrencyConverter from "../components/CurrencyConverter";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { baseRate } from "../static/baseRate";
import "./Currency.scss";

const Currency = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/rates");

      setRates(
        result.data.map((option) => {
          return { value: option.rate, label: option.name };
        })
      );
    };

    fetchData();
  }, []);

  if (rates.length === 0) {
    return <Loader />;
  }

  const formatFirstOption = rates.find((currency) => currency.label === "USD");

  return (
    <section className="content">
      <div className="container">
        <div className="main">
          <Header />
          <CurrencyConverter
            rates={rates}
            baseRate={baseRate}
            firstOption={formatFirstOption}
          />
        </div>
      </div>
    </section>
  );
};

export default Currency;
