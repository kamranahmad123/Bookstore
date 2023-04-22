import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './styles/input-form.css';
import { booksAddition, addbooks } from '../redux/books/booksSlice';

function InputForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const categoryArray = ['Fiction', 'Non-Fiction', 'science', 'education', 'Mystery', 'Science Fiction'];

  const handleSubmition = (e) => {
    const dataObject = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    e.preventDefault();
    dispatch(booksAddition(
      dataObject,
    )).then(() => dispatch(addbooks(
      dataObject,
    )));
  };

  return (
    <div className="book-Form">
      <div>
        <line className="bottom-line" />
        <h2 className="form-header">ADD NEW BOOK</h2>
      </div>
      <form className="bookForm" onSubmit={handleSubmition}>
        <input
          className="bookName"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="authorName"
          type="text"
          placeholder="Author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <select id="books-category" className="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Please choose prefered category</option>
          {categoryArray.map((cat) => <option key={cat} value={cat} className="category-option">{cat}</option>)}
        </select>
        <br />
        <button className="addButton" type="submit">Add Books</button>
      </form>
    </div>
  );
}

export default InputForm;
