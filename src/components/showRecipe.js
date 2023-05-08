import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/showedRecipe.css";
//importing components
import RecipeDetail from "./recipeDetail";

const ShowedRecipe = ({ recipes }) => {
  const { label } = useParams();
  const [Recipe, setRecipe] = useState({});
  useEffect(() => {
    recipes.map((recipe) => {
      if (recipe.recipe.label === label) {
        setRecipe(recipe.recipe);
      }
    });
  }, []);

  return (
    <div className="showedRecipe">
      <RecipeDetail recipe={Recipe}></RecipeDetail>
    </div>
  );
};

export default ShowedRecipe;
