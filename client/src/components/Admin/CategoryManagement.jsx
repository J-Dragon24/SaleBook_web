import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CategoryManagement = () => {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState({ name: "", is_leaf: false });

    useEffect(() => {
        // Fetch categories from API (mock data for now)
        setCategories([
            { id: 1, name: "Category 1", is_leaf: true },
            { id: 2, name: "Category 2", is_leaf: false },
        ]);
    }, []);

    const handleAddCategory = () => {
        if (!newCategory.name) {
            alert("Category name is required!");
            return;
        }
        setCategories([
            ...categories,
            { ...newCategory, id: categories.length + 1 },
        ]);
        setNewCategory({ name: "", is_leaf: false });
    };

    const handleDeleteCategory = (id) => {
        setCategories(categories.filter((category) => category.id !== id));
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Quản lý danh mục</h2>

            {/* Category List */}
            <div className="card shadow mb-4">
                <div className="card-header bg-primary text-white">
                    <h3 className="card-title mb-0">Danh sách danh mục</h3>
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Is Leaf</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category.id}>
                                    <td>{category.name}</td>
                                    <td>{category.is_leaf ? "Yes" : "No"}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                handleDeleteCategory(category.id)
                                            }
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

            {/* Add New Category */}
            <div className="card shadow">
                <div className="card-header bg-success text-white">
                    <h3 className="card-title mb-0">Thêm mới danh mục</h3>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Category Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Category Name"
                            value={newCategory.name}
                            onChange={(e) =>
                                setNewCategory({
                                    ...newCategory,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label>Is Leaf</label>
                        <select
                            className="form-control"
                            value={newCategory.is_leaf}
                            onChange={(e) =>
                                setNewCategory({
                                    ...newCategory,
                                    is_leaf: e.target.value === "true",
                                })
                            }
                        >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <button
                        className="btn btn-success"
                        onClick={handleAddCategory}
                    >
                        Thêm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategoryManagement;