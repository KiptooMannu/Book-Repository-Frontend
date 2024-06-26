import React from 'react';
import './BookItem.scss';

const BookItem = ({ book, setEditBook, deleteBook }) => {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <div className="book-details">
      <p>{book.author}</p>
      <p>{book.year}</p>
      </div>
     
      <button className="edit-button" onClick={() => setEditBook(book)}>Edit</button>
      <button className="delete-button" onClick={() => deleteBook(book.id)}>Delete</button>
    </div>
  );
};

export default BookItem;
