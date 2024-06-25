import React, { useState, useEffect, useCallback } from 'react';
import BookForm from './Components/BookForm/BookForm';
import BookList from './Components/BookList/BookList';
import Pagination from './Components/Pagination/Pagination';
import Search from './Components/Search/Search';
import Header from './Components/Header/Header';
import useBooksReducer from './hooks/useBooksReducer';
import './App.scss';

const App = () => {
  const [books, dispatch] = useBooksReducer([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  const addBook = (book) => {
    dispatch({ type: 'ADD_BOOK', payload: book });
  };

  const updateBook = (id) => {
    // Logic to update a book
  };

  const deleteBook = (id) => {
    dispatch({ type: 'DELETE_BOOK', payload: id });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  const goToNextPage = useCallback(() => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  }, [totalPages]);

  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }, []);

  return (
    <div className="app">
      <Header />
      <BookForm addBook={addBook} />
      <Search searchTerm={searchTerm} setSearchTerm={handleSearch} />
      <BookList books={paginatedBooks} updateBook={updateBook} deleteBook={deleteBook} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </div>
  );
};

export default App;