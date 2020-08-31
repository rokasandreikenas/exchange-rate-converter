import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import getSymbolFromCurrency from "currency-symbol-map";
import "./CurrencyColumn.scss";

const CurrencyColumn = ({
  title,
  selectedOption,
  setSelectedOption,
  options,
  inputValue,
  setInputValue,
  readOnly,
}) => {
  return (
    <div className="currency-column-container">
      <div className="currency-column-title">{title}</div>
      <Select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e)}
        options={options}
        placeholder="Choose currency..."
      />
      <div className="currency-column-input">
        <span className="currency">
          {getSymbolFromCurrency(selectedOption.label)}
        </span>
        <input
          type="number"
          name="amount"
          placeholder="0"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
};

export default CurrencyColumn;

CurrencyColumn.propTypes = {
  title: PropTypes.string.isRequired,
  selectedOption: PropTypes.any,
  setSelectedOption: PropTypes.func.isRequired,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  inputValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  setInputValue: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  readOnly: PropTypes.bool,
};
