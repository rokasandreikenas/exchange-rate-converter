import React, { useState } from "react";
import PropTypes from "prop-types";
import CurrencyColumn from "../CurrencyCollumn";
import "./CurrencyConverter.scss";

const CurrencyConverter = ({ rates }) => {
  const formatSelectOption = rates.map((option) => {
    return { value: option.rate, label: option.name };
  });
  const eurSelectOption = [{ value: 1, label: "EUR" }];

  const firstOption = formatSelectOption.find(
    (currency) => currency.label === "USD"
  );

  const [fromSelectedOption, setFromSelectedOption] = useState(
    eurSelectOption[0]
  );
  const [toSelectedOption, setToSelectedOption] = useState(firstOption);
  const [fromInputValue, setFromInputValue] = useState(
    eurSelectOption[0].value
  );
  const [setToInputValue] = useState();

  return (
    <div className="currency-form">
      <CurrencyColumn
        title="From"
        selectedOption={fromSelectedOption}
        setSelectedOption={setFromSelectedOption}
        options={eurSelectOption}
        inputValue={fromInputValue}
        setInputValue={setFromInputValue}
      />
      <div className="symbol-container">
        <div className="equal-symbol">
          <i>=</i>
        </div>
      </div>
      <CurrencyColumn
        title="To"
        selectedOption={toSelectedOption}
        setSelectedOption={setToSelectedOption}
        options={formatSelectOption}
        inputValue={(fromInputValue * toSelectedOption.value).toFixed(2)}
        setInputValue={setToInputValue}
        readOnly={true}
      />
    </div>
  );
};

export default CurrencyConverter;

CurrencyConverter.propTypes = { rates: PropTypes.array.isRequired };
