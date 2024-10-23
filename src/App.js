import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const App = () => {
  return (
    <BookProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/books" element={<BookList />} />
          <Route path="/books/add" element={<BookForm onClose={() => {}} />} />
          <Route path="/books/edit/:id" element={<BookForm onClose={() => {}} />} />
        </Routes>
      </Router>
    </BookProvider>
  );
};

export default App;
