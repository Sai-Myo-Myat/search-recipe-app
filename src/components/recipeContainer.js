import React from "react";
import "../App.css";
//importing components
import Recipe from "./recipe";

const RecipeContainer = ({ recipes }) => {
  return (
    <div className="recipeContainer">
      {recipes.length > 0 ? recipes.map((item) => {
        return (
          <Recipe
            // label={item.recipe.label}
            calories={item.recipe.calories}
            mealType={item.recipe.mealType}
            ingredientLines={item.recipe.ingredientLines}
            label={item.recipe.label}
            image={item.recipe.image}
            key={item.recipe.image}
          />
        );
      }) : <h3 style={{paddingTop: "10px", color: "red"}}>There is no recipie. </h3>}
    </div>
  );
};

export default RecipeContainer;
