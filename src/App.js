import React from 'react';
import {
  Route, Routes,
  BrowserRouter, Link,
} from 'react-router-dom';
import Books from './components/Books';
import InputForm from './components/InputForm';
import Categories from './components/Categories';
import './components/styles/Navbar.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Bookstore CMS</h1>
        <ul className="form">
          <li><Link to="/">Books</Link></li>
          <li><Link to="/Categories">Categories</Link></li>
        </ul>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                {' '}
                <Books />
                <InputForm />
              </>
)}
          />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
        ,
      </div>
    </BrowserRouter>
  );
}

export default App;
