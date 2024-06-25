import React from 'react';
import './Pagination.scss';

const Pagination = ({ currentPage, totalPages, goToNextPage, goToPreviousPage }) => {
  return (
    <div className="pagination">
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>{currentPage} / {totalPages}</span>
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
