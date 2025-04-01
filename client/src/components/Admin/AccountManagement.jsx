import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AccountManagement = () => {
    const [accounts, setAccounts] = useState([]);
    const [newAccount, setNewAccount] = useState({ username: "", email: "", phone: "" });
    const [editingAccount, setEditingAccount] = useState(null);

    useEffect(() => {
        // Fetch accounts from API (mock data for now)
        setAccounts([
            { id: 1, username: "user1", email: "user1@example.com", phone: "1234567890" },
            { id: 2, username: "user2", email: "user2@example.com", phone: "0987654321" },
        ]);
    }, []);

    const handleAddAccount = () => {
        if (!newAccount.username || !newAccount.email || !newAccount.phone) {
            alert("All fields are required!");
            return;
        }
        setAccounts([...accounts, { ...newAccount, id: accounts.length + 1 }]);
        setNewAccount({ username: "", email: "", phone: "" });
    };

    const handleDeleteAccount = (id) => {
        setAccounts(accounts.filter((account) => account.id !== id));
    };

    const handleEditAccount = (account) => {
        setEditingAccount(account);
    };

    const handleUpdateAccount = () => {
        if (!editingAccount.username || !editingAccount.email || !editingAccount.phone) {
            alert("All fields are required!");
            return;
        }
        setAccounts(
            accounts.map((account) =>
                account.id === editingAccount.id ? editingAccount : account
            )
        );
        setEditingAccount(null);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Quản lý tài khoản</h2>

            {/* Account List */}
            <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                    <h3 className="mb-0">Danh sách tài khoản</h3>
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((account) => (
                                <tr key={account.id}>
                                    <td>{account.username}</td>
                                    <td>{account.email}</td>
                                    <td>{account.phone}</td>
                                    <td>
                                        <button
                                            className="btn btn-warning btn-sm me-2"
                                            onClick={() => handleEditAccount(account)}
                                        >
                                            Sửa
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDeleteAccount(account.id)}
                                        >
                                            Xoá
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add New Account */}
            <div className="card mb-4">
                <div className="card-header bg-success text-white">
                    <h3 className="mb-0">Thêm mới tài khoản</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                value={newAccount.username}
                                onChange={(e) =>
                                    setNewAccount({ ...newAccount, username: e.target.value })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={newAccount.email}
                                onChange={(e) =>
                                    setNewAccount({ ...newAccount, email: e.target.value })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone"
                                value={newAccount.phone}
                                onChange={(e) =>
                                    setNewAccount({ ...newAccount, phone: e.target.value })
                                }
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-success mt-3"
                            onClick={handleAddAccount}
                        >
                            Thêm
                        </button>
                    </form>
                </div>
            </div>

            {/* Edit Account */}
            {editingAccount && (
                <div className="card">
                    <div className="card-header bg-warning text-white">
                        <h3 className="mb-0">Chỉnh sửa tài khoản</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    value={editingAccount.username}
                                    onChange={(e) =>
                                        setEditingAccount({
                                            ...editingAccount,
                                            username: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={editingAccount.email}
                                    onChange={(e) =>
                                        setEditingAccount({
                                            ...editingAccount,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone"
                                    value={editingAccount.phone}
                                    onChange={(e) =>
                                        setEditingAccount({
                                            ...editingAccount,
                                            phone: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-warning mt-3 me-2"
                                onClick={handleUpdateAccount}
                            >
                                Cập nhật
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary mt-3"
                                onClick={() => setEditingAccount(null)}
                            >
                                Hủy
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountManagement;