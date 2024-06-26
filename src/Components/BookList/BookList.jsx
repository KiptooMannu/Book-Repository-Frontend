import React from 'react';
import BookItem from './BookItem/BookItem';
import './BookList.scss';

const BookList = ({ books, setEditBook, deleteBook }) => {
  return (
    <div className="book-list">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <BookItem key={book.id} book={book} setEditBook={setEditBook} deleteBook={deleteBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
