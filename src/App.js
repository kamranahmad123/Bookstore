import React from 'react';
import {
  Route, Routes,
  BrowserRouter, Link,
} from 'react-router-dom';
import Books from './components/Books';
import InputForm from './components/InputForm';
import './components/styles/Navbar.css';
import Categories from './components/Categories';
import './components/styles/Books-section.css';
import avatar from './components/asset/avatar.png';

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <div className="header">
          <ul className="Nav-bar">
            <li className="Project-header">Bookstore CMS</li>
            <li><Link className="Books" to="/">Books</Link></li>
            <li><Link className="categories" to="/Categories">CATEGORIES</Link></li>
          </ul>
          <img alt="logo" className="logo" src={avatar} />
        </div>
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
