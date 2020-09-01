import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("Header", () => {
  it("renders Header component correctly ", () => {
    const output = shallow(<Header />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
