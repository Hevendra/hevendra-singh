import React from "react";
import "../App.css";

const Pagination = props => {
  const { pageNo, isAllFetched, fetchUserFromApi } = props;
  let nextPage = pageNo + 1;
  let prePage = pageNo <= 1 ? 1 : pageNo - 1;
  let preStatusClass = pageNo <= 1 ? "disabled" : "active";
  let nextStatusClass = isAllFetched ? "disabled" : "active";

  return (
    <div className="pagination">
      <a
        href="#"
        onClick={e => {
          fetchUserFromApi(prePage, 10);
        }}
        className={preStatusClass}
      >
        ❮❮
      </a>
      <a
        href="#"
        onClick={e => {
          fetchUserFromApi(nextPage, 10);
        }}
        className={nextStatusClass}
      >
        ❯❯
      </a>
    </div>
  );
};
export default Pagination;
