import React from 'react';
import './styles/Books-section.css';

function BookList() {
  const books = [
    {
      id: '1',
      Book: 'History of time',
      Author: 'Steven hawking',
    },
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
    <div>{booksArray}</div>
  );
}

export default BookList;
