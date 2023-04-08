import { Routes, Route, Link } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/categories';
import './components/styles/Navbar.css';

function App() {
  return (
    <div>
      <h1>Bookstore CMS</h1>
      <ul className="form">
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={(
            <Books />
)}
        />
        <Route path="/categories" element={(<Categories />)} />
      </Routes>
    </div>
  );
}

export default App;
