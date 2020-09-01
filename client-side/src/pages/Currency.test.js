import React from "react";
import Currency from "./Currency";
import Header from "../components/Header";
import { shallow } from "enzyme";

describe("rendering components", () => {
  it("renders Curreny page without crashing", () => {
    shallow(<Currency />);
  });
  it("renders Header component header without crashing", () => {
    shallow(<Header />);
  });
});
