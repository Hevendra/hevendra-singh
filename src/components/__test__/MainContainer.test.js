import React from "react";
import { mount } from "enzyme";
import MainContainer from "../MainContainer";
import Pagination from "../paginationComponent";
import { userService } from "../../services";

describe("<MainContainer/>", () => {
  const sampleTestData = {
    page: 2,
    per_page: 10,
    total: 12,
    total_pages: 2,
    data: [
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
  };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MainContainer />);
  });

  afterEach(() => {
    wrapper.unmount();
  });
  it("should render MainContainer correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Paggination Component", () => {
    expect(wrapper.containsMatchingElement(<Pagination />)).toEqual(true);
  });

  it("should delete user profile", () => {
    const instance = wrapper.instance();
    wrapper.setState({
      userList: sampleTestData.data
    });
    instance.deleteUserById(0, 11);
    expect(wrapper.state("userList").length).toEqual(1);
  });

  it("should show currect number of user profiles", () => {
    wrapper.setState({
      userList: sampleTestData.data
    });
    expect(wrapper.find(".card-body").length).toEqual(2);
  });
});

describe("MainContainer> Testing User Service", () => {
  const sampleTestData = {
    page: 2,
    per_page: 10,
    total: 12,
    total_pages: 2,
    data: [
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
  };

  beforeEach(() => {
    fetch.resetMocks();
  });
  window.alert = jest.fn();
  it("should user-api retun correct number of records", () => {
    fetch.mockResponseOnce(JSON.stringify(sampleTestData));

    //assert on the response
    userService.fetchUsers(2, 2).then(data => {
      expect(data.data.length).toEqual(2);
    });

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls[0][0]).toEqual(
      "https://reqres.in/api/users?page=2&per_page=2"
    );
  });
});
