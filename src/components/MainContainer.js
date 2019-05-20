import React, { Component } from "react";
import { userService } from "../services";
import UserDetail from "./userDetailComponent";
import Pagination from "./paginationComponent";
import "../App.css";

export default class MainContainer extends Component {
  constructor() {
    super();
    this.state = { userList: [], pageNo: 0, isAllFetched: false };
  }

  componentDidMount() {
    this.fetchUserFromApi(this.state.pageNo + 1, 10);
  }

  fetchUserFromApi(pageNo, numberOfRecords) {
    userService.fetchUsers(pageNo, numberOfRecords).then(
      data => {
        this.setState({
          userList: data.data,
          pageNo: data.page,
          isAllFetched: data.page === data.total_pages
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteUserById(e, userId) {
    let updatedUsersList = this.state.userList.filter(
      data => data.id != userId
    );
    this.setState({ userList: updatedUsersList });
  }

  deleteDuplicateUsers(e) {
    const updatedUsersList = this.state.userList.reduce(
      (x, y) =>
        x.findIndex(e => e.first_name === y.first_name) < 0 ? [...x, y] : x,
      []
    );
    this.setState({ userList: updatedUsersList });
    e.preventDefault();
  }

  showUsers() {
    let users = [];
    if (this.state.userList.length) {
      this.state.userList.map((user, i) => {
        users.push(
          <UserDetail
            key={i}
            data={user}
            handleDelete={e => this.deleteUserById(e, user.id)}
          />
        );
      });
    } else {
      users.push(
        <div key={1} className="display-name">
          No User data found!
        </div>
      );
    }
    return users;
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="App-title">Pearson User Management</h1>
          <Pagination
            pageNo={this.state.pageNo}
            isAllFetched={this.state.isAllFetched}
            fetchUserFromApi={this.fetchUserFromApi.bind(this)}
          />
        </div>
        <div className="Container">{this.showUsers()}</div>
        {this.state.userList.length ? (
          <div className="delete-duplicate">
            <a href="" onClick={e => this.deleteDuplicateUsers(e)}>
              Delete Duplicate
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
