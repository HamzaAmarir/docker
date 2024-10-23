import React, { useState, useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { useParams, useNavigate } from 'react-router-dom';

const BookForm = () => {
  const { state, dispatch } = useContext(BookContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const existingBook = id ? state.books.find(book => book.id === parseInt(id)) : null;

  const [formData, setFormData] = useState(existingBook || {
    isbn: '',
    title: '',
    author: '',
    poster: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingBook) {
      dispatch({ type: 'UPDATE_BOOK', payload: formData });
    } else {
      dispatch({ type: 'ADD_BOOK', payload: { ...formData, id: Date.now() } });
    }
    navigate('/books');
  };

  return (
<div className="container mt-4">
      <h2>{existingBook ? 'Edit Book' : 'Add Book'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            placeholder="ISBN"
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            name="poster"
            value={formData.poster}
            onChange={handleChange}
            placeholder="Poster URL"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
            rows="3"
          />
        </div>
        <button className="btn btn-primary my-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
