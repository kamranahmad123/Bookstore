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
    <div className="bookForm">
      <form className="bookForm" onSubmit={handleSubmition}>
        <input
          className="bookName"
          type="text"
          placeholder="bookTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="authorName"
          type="text"
          placeholder="authorName"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <select id="books-category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Please choose prefered category</option>
          {categoryArray.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <br />
        <button className="addButton" type="submit">Add</button>
      </form>
    </div>
  );
}

export default InputForm;
