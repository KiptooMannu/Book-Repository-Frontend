import React, { useState, useEffect, useCallback } from 'react';
import BookForm from './Components/BookForm/BookForm';
import BookList from './Components/BookList/BookList';
import Pagination from './Components/Pagination/Pagination';
import Search from './Components/Search/Search';
import Header from './Components/Header/Header';
import { getBooks } from './context/Apicontext'; // Import the getBooks function
import useBooksReducer from './hooks/useBooksReducer';
import './App.scss';

const App = () => {
  const [books, dispatch] = useBooksReducer([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [editBook, setEditBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const booksPerPage = 5;

  // Fetch books from the API when the component mounts
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks(); // Fetch books using the imported function
        console.log('Fetched books:', response); // Log the response to verify it
        dispatch({ type: 'SET_BOOKS', payload: response }); // Update books state
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchBooks();
  }, [dispatch]);

  const addBook = (book) => {
    dispatch({ type: 'ADD_BOOK', payload: book }); // Dispatch action to add book
  };

  const updateBook = (book) => {
    dispatch({ type: 'UPDATE_BOOK', payload: book }); // Dispatch action to update book
    setEditBook(null); // Clear editBook state after update
  };

  const deleteBook = (id) => {
    dispatch({ type: 'DELETE_BOOK', payload: id }); // Dispatch action to delete book
  };

  const handleSearch = (term) => {
    setSearchTerm(term); // Update searchTerm state based on input
  };

  // Filter books based on searchTerm
  const filteredBooks = Array.isArray(books) && books.length > 0
    ? books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Pagination logic
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  // Callbacks for pagination
  const goToNextPage = useCallback(() => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  }, [totalPages]);

  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }, []);

  // Clear editBook state
  const clearEditBook = () => {
    setEditBook(null);
  };

  return (
    <div className="app">
      <Header />
      <BookForm addBook={addBook} editBook={editBook} updateBook={updateBook} />
      <Search searchTerm={searchTerm} setSearchTerm={handleSearch} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <BookList books={paginatedBooks} setEditBook={setEditBook} deleteBook={deleteBook} />
      )}
      <div className="pagination">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
        />
      </div>
    </div>
  );
};

export default App;
