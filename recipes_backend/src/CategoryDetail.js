import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function CategoryDetail() {
    const { id } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/`)
            .then(response => {
                const filteredRecipes = response.data.filter(recipe => recipe.category === parseInt(id));
                setRecipes(filteredRecipes);
                setLoading(false);
            })
            .catch(err => {
                console.error("There was an error:", err.response);
                setError(err.response);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occurred: {error.message}</div>;
    }

    return (
        <div>
            <h1>Список рецептов</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryDetail;
