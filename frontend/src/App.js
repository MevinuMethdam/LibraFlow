import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './components/Login';
import Register from './components/Register';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </AnimatePresence>
    );
};

const Home = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
    >
        <div style={{ fontSize: '3.5rem', marginBottom: '20px', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>📚</div>
        <h2 style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
            Welcome to LibraFlow
        </h2>
        <div style={{ height: '3px', width: '80px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', margin: '0 auto 30px auto', borderRadius: '5px' }}></div>
        <p style={{ color: '#e2e8f0', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '40px', fontWeight: '300', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            A serene space to manage, discover, and organize your library's collection.
            Experience a seamless cataloging system designed for professionals.
        </p>
        <Link to="/login" style={{ textDecoration: 'none' }}>
            <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                    padding: '14px 40px',
                    background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '30px',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background 0.3s',
                }}
            >
                Get Started
            </motion.button>
        </Link>
    </motion.div>
);

function App() {
    const appStyle = {
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.9)), url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        fontFamily: '"Inter", "Segoe UI", Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        margin: '40px 0',
        padding: '12px 30px',

        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '50px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#f8fafc',
        fontWeight: '500',
        fontSize: '1rem',
        padding: '10px 20px',
        borderRadius: '30px',
        transition: 'all 0.3s ease',
    };

    const contentAreaStyle = {
        width: '90%',
        maxWidth: '700px',
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '24px',
        padding: '60px 50px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderTop: '1px solid rgba(255, 255, 255, 0.3)',
        borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
    };

    return (
        <Router>
            <div style={appStyle}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={navStyle}
                >
                    <Link to="/" style={linkStyle}>Book Catalog</Link>
                    <Link to="/login" style={linkStyle}>Login</Link>
                    <Link to="/register" style={linkStyle}>Register</Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={contentAreaStyle}
                >
                    <AnimatedRoutes />
                </motion.div>
            </div>
        </Router>
    );
}

export default App;
