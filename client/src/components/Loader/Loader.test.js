import React from "react";
import Loader from "./Loader";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("Loader", () => {
  it("renders Loader component correctly ", () => {
    const output = shallow(<Loader />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
