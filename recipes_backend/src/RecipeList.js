import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/recipes/')
            .then(response => response.json())
            .then(data => setRecipes(data));
    }, []);

    return (
        <div>
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <h2>
                        <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                    </h2>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
}

export default RecipeList;
