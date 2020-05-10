import React from "react";
import { shallow } from "enzyme";
import CategoryList from "./components/CategoryList";
import CallButton from "./components/CallButton";
import Footer from "./components/Footer";

it("Renders CategoryList without crashing", () => {
  shallow(<CategoryList />);
});

it("Renders CallButton without crashing", () => {
  shallow(<CallButton />);
});

it("Renders Footer without crashing", () => {
  shallow(<Footer />);
});
