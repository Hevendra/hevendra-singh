import React from "react";
import { shallow } from "enzyme";
import Pagination from "../paginationComponent";

describe("<Pagination/>", () => {
  const wrapper = shallow(<Pagination pageNo={1} isAllFetched={false} />);

  it("should render pagination correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render currect buttons", () => {
    expect(wrapper.find("a").length).toEqual(2);
  });
});
