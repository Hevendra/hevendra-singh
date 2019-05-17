import React from "react";
import "../App.css";

const UserDetail = props => {
  const { data, handleDelete } = props;
  return (
    <div className="card-body">
      <div className="wrapper">
        <img
          id="image_avatar"
          src={data.avatar}
          alt="PS"
          className="image--cover"
        />
      </div>
      <p className="display-name">{data.first_name + " " + data.last_name} </p>
      <p
        className="button"
        onClick={e => {
          handleDelete(data);
        }}
      >
        <span>Delete </span>
      </p>
    </div>
  );
};

export default UserDetail;
