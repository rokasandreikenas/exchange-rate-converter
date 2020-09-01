import React from "react";
import CurrencyColumn from "./CurrencyColumn";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("CurrencyColumn", () => {
  it("renders CurrencyColumn component correctly ", () => {
    const selectedOptionMock = { value: 1, label: "mock" };
    const optionsMock = [
      { value: 1, label: "mock1", value: 2, label: "mock2" },
    ];

    const output = shallow(
      <CurrencyColumn
        title="Mock title"
        selectedOption={selectedOptionMock}
        setSelectedOption={() => {}}
        options={optionsMock}
        inputValue={selectedOptionMock.value}
        setInputValue={() => {}}
        readOnly={false}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
