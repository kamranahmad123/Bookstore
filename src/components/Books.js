import React from 'react';
import './styles/Books-section.css';
import './styles/input-form.css';

function Books() {
  const books = [
    {
      id: '2',
      Book: 'Himself',
      Author: 'Jess Kidd',
    },
    {
      id: '3',
      Book: 'Normal People',
      Author: 'Sally Rooney',
    },

  ];

  const booksArray = books.map((book) => (
    <div key={book.id} className="Books-section">
      <ul className="Book-list">
        <li>{book.Book}</li>
        <li>
          <strong>
            By
            {book.Author}
          </strong>
        </li>
      </ul>
      <button type="submit" className="removeButton">Remove</button>
    </div>
  ));

  return (
    <>
      <div>{booksArray}</div>
      <form className="bookForm">
        <input className="bookName" placeholder="bookName" />
        <input className="authorName" placeholder="authorName" />
        <button className="addButton" type="submit">Add</button>
      </form>
    </>
  );
}

export default Books;
