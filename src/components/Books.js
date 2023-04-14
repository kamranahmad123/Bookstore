import React from 'react';
import './styles/Books-section.css';
import './styles/input-form.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeBooks } from '../redux/features/book/bookSlice';
import AddButton from './addButton';

function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.anyName.booksArray);
  const booksArray = books.map((book) => (
    <div key={book.item_id} className="Books-section">
      <ul className="Book-list">
        <li>{book.title}</li>
        <li>
          <strong>
            By:
            {' '}
            {book.author}
          </strong>
        </li>
      </ul>
      <button
        type="submit"
        className="removeButton"
        onClick={() => {
          dispatch(removeBooks(book.item_id));
        }}
      >
        Remove
      </button>
    </div>
  ));

  return (
    <>
      <div>{booksArray}</div>
      <div><AddButton /></div>
    </>
  );
}

export default Books;
