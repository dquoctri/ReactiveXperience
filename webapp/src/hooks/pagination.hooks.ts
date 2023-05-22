import React, { useState } from 'react';

const usePagination = (itemsPerPage: number, initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const getPaginatedData = (data: any) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  return {
    currentPage,
    goToPage,
    nextPage,
    prevPage,
    getPaginatedData,
  };
};