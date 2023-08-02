import React from "react";
import Pagination from "react-js-pagination";
import "../scss/CSNewsPage.scss";

const CSNewsPage = ({ page, count, setPage }) => {
  //console.log(page);
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={5}
      totalItemsCount={50}
      pageRangeDisplayed={5}
      prevPageText={"<"}
      nextPageText={">"}
      onChange={setPage}
    />
  );
};

export default CSNewsPage;
