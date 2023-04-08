import './styles/input-form.css';

function InputForm() {
  return (
    <form className="bookForm">
      <input className="bookName" placeholder="bookName" />
      <input className="authorName" placeholder="authorName" />
      <button className="addButton" type="submit">Add</button>
    </form>
  );
}

export default InputForm;
