import React from "react";
import { shallow } from "enzyme";
import MainContainer from "../MainContainer";
import UserDetail from "../userDetailComponent";
import Pagination from "../paginationComponent";

describe("<MainContainer/>", () => {
  const wrapper = shallow(<MainContainer />);

  it("should render MainContainer correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Paggination Component", () => {
    expect(wrapper.containsMatchingElement(<Pagination />)).toEqual(true);
  });
});
