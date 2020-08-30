import React, { useState } from "react";
import CurrencyColumn from "../CurrencyCollumn";
import "./CurrencyConverter.scss";

const CurrencyConverter = ({ rates }) => {
  const formatSelectOption = rates.map((option) => {
    return { value: option.rate, label: option.name };
  });
  const eurSelectOption = [{ value: 1, label: "EUR" }];

  const [fromSelectedOption, setFromSelectedOption] = useState(
    eurSelectOption[0]
  );
  const [toSelectedOption, setToSelectedOption] = useState(
    rates && formatSelectOption.find((currency) => currency.name === "USD")
  );
  const [fromInputValue, setFromInputValue] = useState();
  const [toInputValue, setToInputValue] = useState();

  if (rates.length === 0) {
    return <div>...</div>;
  }

  console.log(formatSelectOption.find((currency) => currency.label === "USD"));

  return (
    <div className="currency-form">
      <CurrencyColumn
        title="From"
        selectedOption={fromSelectedOption}
        setSelectedOption={setFromSelectedOption}
        options={eurSelectOption}
        defaultValue={eurSelectOption[0]}
        inputValue={fromInputValue}
        setInputValue={setFromInputValue}
      />
      {/* <button>Change</button> */}

      <CurrencyColumn
        title="To"
        selectedOption={toSelectedOption}
        setSelectedOption={setToSelectedOption}
        options={formatSelectOption}
        defaultValue={formatSelectOption.find(
          (currency) => currency.label === "USD"
        )}
        inputValue={toInputValue}
        setInputValue={setToInputValue}
        readOnly={true}
      />
    </div>
  );
};

export default CurrencyConverter;
