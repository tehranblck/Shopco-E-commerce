import React from 'react';

function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        style={{
          margin: '0 5px',
            padding: '5px 10px',
          cursor:"pointer",
          backgroundColor: i === currentPage ? 'black' : 'white',
          color: i === currentPage ? 'white' : 'black',
        }}
      >
        {i}
      </button>
    );
  }

  return <div style={{textAlign:"center",marginTop:"50px"}}>{pages}</div>;
}

export default Pagination;
