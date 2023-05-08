import React, { useEffect, useState } from "react";
import "../css/showedRecipe.css";

const RecipeDetail = ({ recipe }) => {
  return (
    <div className="Recipe">
      <h2>{recipe.label}</h2>
      <div className="infoContainer">
        
        <div  className="imageContainer">
        <div className="image" style={{
                      backgroundImage: `url(${recipe.image})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat"
                  }}> </div>
        </div>
        <div className="infos">
          <h3>
            Dish Type: <span>{recipe.dishType} ( {recipe.mealType} )</span>
          </h3>
          <h3>calories: <span>{recipe.calories} -(kcals)</span></h3>
          <h3>Total Weight: <span>{recipe.totalWeight}</span></h3>
          <h3>Diet label: <span>{recipe.dietLabels}</span></h3>
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
