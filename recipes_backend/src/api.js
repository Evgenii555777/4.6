// api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/API/';  // Убедитесь, что URL соответствует вашему серверу Django

export const getCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}categories/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories", error);
        return [];
    }
}

export const getRecipe = async (recipeId) => {
    try {
        const response = await axios.get(`${API_URL}recipes/${recipeId}/`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching recipe with id ${recipeId}`, error);
        return null;
    }
}
