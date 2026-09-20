import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <Router>
            <div style={{ padding: '20px', fontFamily: 'Arial' }}>
                <h1>LibraFlow - Library Management</h1>
                <nav style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #ccc' }}>
                    <Link to="/login" style={{ marginRight: '15px', textDecoration: 'none', color: '#007bff' }}>Login</Link>
                    <Link to="/register" style={{ marginRight: '15px', textDecoration: 'none', color: '#007bff' }}>Register</Link>
                    <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>Book Catalog</Link>
                </nav>

                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<h2>Library Book Catalog (Home)</h2>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
