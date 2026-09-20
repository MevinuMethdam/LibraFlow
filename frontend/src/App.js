import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookCatalog from './pages/BookCatalog';

function App() {
  return (
      <Router>
        <div className="App">
          <header>
            <h1>LibraFlow - Library Management</h1>
          </header>
          <Routes>
            <Route path="/" element={<BookCatalog />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
