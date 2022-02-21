import React from "react";
import "../App.css";
//importing components
import Recipe from "./recipe";
import ShowedRecipe from "./showRecipe";

const RecipeContainer = ({ recipes }) => {
  return (
    <div className="recipeContainer">
      {recipes.map((item) => {
        return (
          <Recipe
            // label={item.recipe.label}
            calories={item.recipe.calories}
            mealType={item.recipe.mealType}
            ingredientLines={item.recipe.ingredientLines}
            label={item.recipe.label}
            image={item.recipe.image}
            key={item.recipe.label}
          />
        );
      })}
    </div>
  );
};

export default RecipeContainer;
