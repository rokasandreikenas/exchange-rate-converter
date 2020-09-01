import React from "react";
import SwitchButton from "./SwitchButton";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("SwitchButton", () => {
  it("renders SwitchButton component correctly ", () => {
    const output = shallow(<SwitchButton onClick={() => {}} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
