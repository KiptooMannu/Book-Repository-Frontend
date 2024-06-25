import React, { useRef } from 'react';
import './BookForm.scss';

const BookForm = ({ addBook }) => {
  const titleRef = useRef();
  const authorRef = useRef();
  const yearRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      year: yearRef.current.value,
    };
    addBook(newBook);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input type="text" ref={titleRef} placeholder="Title" required />
      <input type="text" ref={authorRef} placeholder="Author" required />
      <input type="number" ref={yearRef} placeholder="Publication Year" required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
