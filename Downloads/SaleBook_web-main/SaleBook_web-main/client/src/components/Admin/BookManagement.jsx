import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookManagement = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        category: '',
        isbn: '',
        publishedYear: '',
        description: '',
        price: '',
        bookCover: ''
    });

    useEffect(() => {
        // Fetch books from API (mock data for now)
        setBooks([{ id: 1, title: 'Book 1', author: 'Author 1', category: 'Category 1', isbn: '1234567890', publishedYear: '2020' }]);
    }, []);

    const handleAddBook = () => {
        setBooks([...books, { ...newBook, id: books.length + 1 }]);
        setNewBook({
            title: '',
            author: '',
            category: '',
            isbn: '',
            publishedYear: '',
            description: '',
            price: '',
            bookCover: ''
        });
    };

    const handleDeleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Quản lý sách</h2>
            <div className="row">
                <div className="col-md-8">
                    <h3>Danh sách sách</h3>
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Category</th>
                                <th>ISBN</th>
                                <th>Published Year</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map(book => (
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.category}</td>
                                    <td>{book.isbn}</td>
                                    <td>{book.publishedYear}</td>
                                    <td>
                                        <button 
                                            className="btn btn-danger btn-sm" 
                                            onClick={() => handleDeleteBook(book.id)}
                                        >
                                            Xoá
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    <h3>Thêm mới sách</h3>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control mb-2" 
                            placeholder="Title" 
                            value={newBook.title} 
                            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control mb-2" 
                            placeholder="Author" 
                            value={newBook.author} 
                            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control mb-2" 
                            placeholder="Category" 
                            value={newBook.category} 
                            onChange={(e) => setNewBook({ ...newBook, category: e.target.value })} 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control mb-2" 
                            placeholder="ISBN" 
                            value={newBook.isbn} 
                            onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })} 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control mb-2" 
                            placeholder="Published Year" 
                            value={newBook.publishedYear} 
                            onChange={(e) => setNewBook({ ...newBook, publishedYear: e.target.value })} 
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                            className="form-control mb-2" 
                            placeholder="Description" 
                            value={newBook.description} 
                            onChange={(e) => setNewBook({ ...newBook, description: e.target.value })} 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="number" 
                            className="form-control mb-2" 
                            placeholder="Price" 
                            value={newBook.price} 
                            onChange={(e) => setNewBook({ ...newBook, price: e.target.value })} 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control mb-2" 
                            placeholder="Book Cover URL" 
                            value={newBook.bookCover} 
                            onChange={(e) => setNewBook({ ...newBook, bookCover: e.target.value })} 
                        />
                    </div>
                    <button 
                        className="btn btn-primary btn-block" 
                        onClick={handleAddBook}
                    >
                        Thêm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookManagement;
