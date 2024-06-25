import React from 'react';
import BookItem from './BookItem/BookItem';
import './BookList.scss';

const BookList = ({ books, updateBook, deleteBook }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem key={book.id} book={book} updateBook={updateBook} deleteBook={deleteBook} />
      ))}
    </div>
  );
};

export default BookList;
