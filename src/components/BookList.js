import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { useNavigate } from 'react-router-dom';

const BookList = () => {
  const { state, dispatch } = useContext(BookContext);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_BOOK', payload: { id } });
  };
  return (
    <div className="container mt-4">
    <button className="btn btn-info w-100 text-white" onClick={() => navigate("/books/add")}>Add</button>
    <h2>Book List</h2>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {state.books.length>0 ? state.books.map(book => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(book.id)}>Delete</button>
              <button className="btn btn-primary btn-sm mx-1" onClick={() => navigate(`/books/edit/${book.id}`)}>Edit</button>
              <button className="btn btn-warning btn-sm">View</button>
            </td>
          </tr>
        )):<h5>No books to show!</h5>}
      </tbody>
    </table>
  </div>
  );
};

export default BookList;
