// BookList.jsx

import React from 'react';
import './BookList.scss'; // Import your SCSS file for styling

const BookList = ({ books, setEditBook, deleteBook }) => {
  return (
    <div className="book-list">
      <h2>Books List</h2>
      {books.length === 0 ? (
        <p>No books to display</p>
      ) : (
        <ul className="books-list">
          {books.map((book) => (
            <li key={book.id} className="book-item">
              <div className="book-details">
                <div>
                  <strong>Title:</strong> {book.title}
                </div>
                <div>
                  <strong>Author ID:</strong> {book.author_id}
                </div>
                <div>
                  <strong>Year:</strong> {book.year}
                </div>
              </div>
              <div className="book-actions">
                <button className="edit-button" onClick={() => setEditBook(book)}>
                  Edit
                </button>
                <button className="delete-button" onClick={() => deleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
