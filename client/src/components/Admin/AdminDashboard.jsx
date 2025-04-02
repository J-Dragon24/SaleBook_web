import React from 'react';
import Sidebar from './Sidebar';
import BookManagement from './BookManagement';
import AccountManagement from './AccountManagement';
import CategoryManagement from './CategoryManagement';

const AdminDashboard = () => {
    return (
        <div style={styles.container}>
            <Sidebar />
            <div style={styles.content}>
                <h1 style={styles.header}>Admin Dashboard</h1>
                <div style={styles.card}>
                    <BookManagement />
                </div>
                <div style={styles.card}>
                    <AccountManagement />
                </div>
                <div style={styles.card}>
                    <CategoryManagement />
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f9',
        minHeight: '100vh',
    },
    content: {
        marginLeft: '240px',
        padding: '20px',
        flex: 1,
    },
    header: {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '20px',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        marginBottom: '20px',
    },
};

export default AdminDashboard;
