import React from 'react';
import './styles/Books-section.css';
import './styles/input-form.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeBooks, addBooks } from '../redux/features/book/bookSlice';

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
  const addNew = (e) => {
    e.preventDefault();
    const bookTitle = e.target[0];
    const bookAuthor = e.target[1];
    const itemId = Math.floor((Math.random() * 1000) + 1);
    dispatch(addBooks({ title: bookTitle.value, author: bookAuthor.value, item_id: itemId }));
  };

  return (
    <>
      <div>{booksArray}</div>
      <form className="bookForm" onSubmit={addNew}>
        <input className="bookName" placeholder="bookName" />
        <input className="authorName" placeholder="authorName" />
        <button className="addButton" type="submit">Add</button>
      </form>
    </>
  );
}

export default Books;
