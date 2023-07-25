import React, { useEffect, useState } from "react";

const CSNewsList = () => {
  const [newsList, setNewsList] = useRecoilState();
  const [page, setPage] = useState(1);
  const listPerPage = 5;
  const totalPage = Math.ceil(newsList.length / listPerPage);

  useEffect(() => {
    async () => {};
  });
  return (
    <>
      <Pagination
        totalPage={totalPage}
        limit={5}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default CSNewsList;
