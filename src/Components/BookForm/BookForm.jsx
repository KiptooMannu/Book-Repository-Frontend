import React, { useState, useEffect } from 'react';
import './BookForm.scss';

const BookForm = ({ addBook, editBook, updateBook, clearEditBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (editBook) {
      setTitle(editBook.title);
      setAuthor(editBook.author);
      setYear(editBook.year);
    } else {
      setTitle('');
      setAuthor('');
      setYear('');
    }
  }, [editBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editBook) {
      updateBook({ ...editBook, title, author, year });
      clearEditBook();
    } else {
      addBook({ id: Date.now(), title, author, year });
    }
    setTitle('');
    setAuthor('');
    setYear('');
    clearEditBook();
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />
      <button type="submit">{editBook ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default BookForm;
