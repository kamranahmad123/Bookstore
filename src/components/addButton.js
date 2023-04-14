import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/features/book/bookSlice';

function AddButton() {
  const dispatch = useDispatch();
  const addNew = (e) => {
    e.preventDefault();
    const bookTitle = e.target[0];
    const bookAuthor = e.target[1];
    const itemId = Math.floor((Math.random() * 1000) + 1);
    dispatch(addBooks({ title: bookTitle.value, author: bookAuthor.value, item_id: itemId }));
  };
  return (
    <form className="bookForm" onSubmit={addNew}>
      <input className="bookName" placeholder="bookName" />
      <input className="authorName" placeholder="authorName" />
      <button className="addButton" type="submit">Add</button>
    </form>
  );
}

export default AddButton;
