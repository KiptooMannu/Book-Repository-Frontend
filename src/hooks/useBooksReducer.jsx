import { useReducer, useEffect } from 'react';
import booksReducer from '../reducers/booksReducer';
import useLocalStorage from './useLocalStorage';

const useBooksReducer = (initialBooks) => {
  const [storedBooks, setStoredBooks] = useLocalStorage('books', initialBooks);
  const [books, dispatch] = useReducer(booksReducer, storedBooks);

  useEffect(() => {
    setStoredBooks(books);
  }, [books, setStoredBooks]);

  return [books, dispatch];
};

export default useBooksReducer;