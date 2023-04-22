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
        <div key={book.item_id} className="entire-data">
          <div className="Books-section">
            <ul className="Book-list">
              <li className="bookCategoy">
                {book.category}
              </li>
              <li className="bookTitle">
                {book.title}
              </li>
              <li className="bookAuthor">
                {book.author}
              </li>
            </ul>
            <div className="buttons">
              <button
                type="button"
                className="commentButton"
              >
                Comments
              </button>
              <button
                type="button"
                className="removeButton"
                onClick={() => {
                  dispatch(booksRemoval(book.item_id));
                }}
              >
                Remove
              </button>
              <button
                type="button"
                className="editButton"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="progress-section">
            <p alt="progrss circle" className="progress-circle" />
            <ul className="Progress-details">
              <li className="Progress-percentage">56%</li>
              <li className="progress-status">Completed</li>
            </ul>
            <p className="progress-border" />
          </div>
          <div className="chapters-section">
            <ul className="Chapters">
              <li className="Current-Chapter">CURRENT CHAPTER</li>
              <li className="Chapter-No">Chapter 18</li>
              <button type="submit" className="progress-button">UPDATE PROGRESS</button>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Books;
