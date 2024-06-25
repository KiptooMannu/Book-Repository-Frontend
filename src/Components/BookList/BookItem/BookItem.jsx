import React from 'react';
import './BookItem.scss';

const BookItem = ({ book, updateBook, deleteBook }) => {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.year}</p>
      <button onClick={() => updateBook(book.id)}>Edit</button>
      <button onClick={() => deleteBook(book.id)}>Delete</button>
    </div>
  );
};

export default BookItem;
