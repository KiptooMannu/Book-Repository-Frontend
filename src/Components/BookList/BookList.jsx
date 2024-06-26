// BookList.jsx
import React from 'react';
import BookItem from './BookItem/BookItem';
import './BookList.scss';

const BookList = ({ books, setEditBook, deleteBook }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem key={book.id} book={book} setEditBook={setEditBook} deleteBook={deleteBook} />
      ))}
    </div>
  );
};

export default BookList;
