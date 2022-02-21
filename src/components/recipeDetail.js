import React, { useEffect, useState } from "react";
import "../css/showedRecipe.css";

const RecipeDetail = ({ recipe }) => {
  return (
    <div className="Recipe">
      <h2>{recipe.label}</h2>
      <div className="infoContainer">
        <img className="image" src={recipe.image} alt="" />
        <div className="infos">
          <h3>
            Dish Type: {recipe.dishType} ({recipe.mealType})
          </h3>
          <h3>calories: {recipe.calories}</h3>
          <h3>Total Weight: {recipe.totalWeight}</h3>
          <h3>Diet label: {recipe.dietLabels}</h3>
          {/* <ol>
            {recipe.ingredientLines.map((ingredient) => {
              return <li>{ingredient}</li>;
            })}
          </ol> */}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
