import React, { useState, useEffect } from 'react';
import './BookForm.scss';


const BookForm = ({ addBook, updateBook, editBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (editBook) {
      setTitle(editBook.title);
      setAuthor(editBook.author);
      setYear(editBook.year);
    }
  }, [editBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, year, id: editBook ? editBook.id : Date.now() };
    if (editBook) {
      updateBook(book);
    } else {
      addBook(book);
    }
    setTitle('');
    setAuthor('');
    setYear('');
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
      <button type="submit">{editBook ? 'Update' : 'Add'} Book</button>
      
    </form>
  );
};

export default BookForm;
