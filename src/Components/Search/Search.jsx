import React, { useEffect, useRef } from 'react';
import './Search.scss';

const Search = ({ searchTerm, setSearchTerm }) => {
  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.value = searchTerm;
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        ref={searchRef}
        placeholder="Search by title"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
