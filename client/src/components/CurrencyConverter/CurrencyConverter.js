import React, { useState } from "react";
import PropTypes from "prop-types";
import CurrencyColumn from "../CurrencyCollumn";
import "./CurrencyConverter.scss";
import Switch from "../Switch";

const CurrencyConverter = ({ rates, baseRate, firstOption }) => {
  const [fromSelectedOption, setFromSelectedOption] = useState(baseRate[0]);
  const [toSelectedOption, setToSelectedOption] = useState(firstOption);
  const [fromInputValue, setFromInputValue] = useState(baseRate[0].value);
  const [setToInputValue] = useState(firstOption.value);
  const [currencySwapped, setCurrencySwapped] = useState(false);

  const handleCurrencySwap = () => {
    setFromSelectedOption(toSelectedOption);
    setToSelectedOption(fromSelectedOption);
    setCurrencySwapped(!currencySwapped);
  };

  const currencyActions = () => {
    if (currencySwapped) {
      return (
        (toSelectedOption.value / fromSelectedOption.value) * fromInputValue
      );
    } else {
      return toSelectedOption.value * fromInputValue;
    }
  };

  return (
    <div className="currency-form">
      <CurrencyColumn
        title="From"
        selectedOption={fromSelectedOption}
        setSelectedOption={setFromSelectedOption}
        options={currencySwapped ? rates : baseRate}
        inputValue={fromInputValue}
        setInputValue={setFromInputValue}
      />
      <Switch onClick={handleCurrencySwap} />
      <CurrencyColumn
        title="To"
        selectedOption={toSelectedOption}
        setSelectedOption={setToSelectedOption}
        options={currencySwapped ? baseRate : rates}
        inputValue={currencyActions().toFixed(2)}
        setInputValue={setToInputValue}
        readOnly={true}
      />
    </div>
  );
};

export default CurrencyConverter;

CurrencyConverter.propTypes = {
  rates: PropTypes.array.isRequired,
  baseRate: PropTypes.array.isRequired,
};
