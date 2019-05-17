import React from "react";
import { shallow } from "enzyme";
import UserDetail from "../userDetailComponent";

describe("<UserDetailComponent/>", () => {
  const wrapper = shallow(
    <UserDetail
      key={1}
      data={{
        first_name: "George",
        last_name: "Edwards",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
      }}
    />
  );

  it("should render user information correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correct user name", () => {
    expect(wrapper.find(".display-name").text()).toEqual("George Edwards ");
  });

  it("should render correct user image", () => {
    expect(wrapper.find("img").props().src).toEqual(
      "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
    );
  });
});
