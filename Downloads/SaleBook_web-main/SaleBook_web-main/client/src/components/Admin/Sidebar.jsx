import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="d-flex flex-column vh-100 bg-light p-3" style={{ width: '240px' }}>
            <h2 className="text-center mb-4">Admin Panel</h2>
            <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <Link to="/dashboard" className="nav-link text-dark">
                        <i className="bi bi-speedometer2 me-2"></i> Dashboard
                    </Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/books" className="nav-link text-dark">
                        <i className="bi bi-book me-2"></i> Quản lý sách
                    </Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/accounts" className="nav-link text-dark">
                        <i className="bi bi-people me-2"></i> Quản lý tài khoản
                    </Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/categories" className="nav-link text-dark">
                        <i className="bi bi-tags me-2"></i> Quản lý danh mục
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
