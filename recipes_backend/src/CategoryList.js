import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/categories/')
            .then(response => {
                setCategories(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("There was an error:", err.response);
                setError(err.response);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occurred: {error.message}</div>;
    }

    return (
        <div>
            {categories.map(category => (
                <div key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.title}</Link>
                </div>
            ))}
        </div>
    );
}

export default CategoryList;
