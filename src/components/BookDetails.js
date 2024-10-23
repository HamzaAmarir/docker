import React from 'react';
import Modal from 'react-modal';

const BookDetails = ({ book, isOpen, onRequestClose }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
    <h2>{book.title}</h2>
    <p>{book.description}</p>
    <button onClick={onRequestClose}>Close</button>
  </Modal>
);

export default BookDetails;
