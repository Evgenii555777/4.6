import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryList from './CategoryList';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import CategoryDetail from './CategoryDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/category/:id" element={<CategoryDetail />} />
        <Route path="/recipe" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
