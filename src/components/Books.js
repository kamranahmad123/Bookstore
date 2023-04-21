import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { booksRemoval, fetchBooksData } from '../redux/books/booksSlice';
import './styles/Books-section.css';

function Books() {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksData());
  }, [dispatch]);

  if (isLoading === true) {
    return <h3>Request is loading</h3>;
  }

  if (error === true) {
    return <h3>Error has occured</h3>;
  }
  return (
    <div className="book-Data">
      {books.map((book) => (
        <div key={book.item_id} className="Books-section">
          <ul className="Book-list">
            <li>
              Book:
              {book.title}
            </li>
            <li>
              Author:
              {book.author}
            </li>
            <li>
              Category:
              {book.category}
            </li>
            <button
              type="button"
              className="removeButton"
              onClick={() => {
                dispatch(booksRemoval(book.item_id));
              }}
            >
              Remove
            </button>

          </ul>
        </div>
      ))}
    </div>
  );
}

export default Books;
