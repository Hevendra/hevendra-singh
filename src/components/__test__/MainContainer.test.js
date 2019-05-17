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

  it("should delete user profile", () => {
    const instance = wrapper.instance();
    wrapper.setState({
      userList: [
        {
          id: 11,
          email: "george.edwards@reqres.in",
          first_name: "George",
          last_name: "Edwards",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
        },
        {
          id: 12,
          email: "rachel.howell@reqres.in",
          first_name: "Rachel",
          last_name: "Howell",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
        }
      ]
    });
    instance.deleteUserById(0, 11);
    expect(wrapper.state("userList").length).toEqual(1);
  });
});
