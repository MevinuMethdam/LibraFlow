import React, { useEffect, useState } from 'react';
import API from '../services/api';

const BookCatalog = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await API.get('/books');
                setBooks(response.data);
            } catch (error) {
                console.error("Error fetching books", error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <div>
            <h2>Library Book Catalog</h2>
            <div className="book-list">
                {books.map((book) => (
                    <div key={book._id} className="book-card">
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <p>Status: {book.isAvailable ? 'Available' : 'Borrowed'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookCatalog;