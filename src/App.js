import BookList from './components/Book-list';
import StatuseButton from './components/categories';
import InputForm from './components/Input-form';
import { Routes, Route, Link } from 'react-router-dom';
import './components/Styles/Navbar.css'

function App() {
  return (
    <div>
    <h1>Bookstore CMS</h1> 
    <ul className='form'>
    <li><Link to={'/'}>Books</Link></li>
    <li><Link to={'/StatusButton'}>Categories</Link></li>
    </ul>
<Routes>
<Route path='/' element={<div><BookList /><InputForm /></div>} />
<Route path='/StatusButton' element={<StatuseButton />} />
</Routes>
</div>
  );
};

export default App;
