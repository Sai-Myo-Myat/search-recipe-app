import React, { useState } from "react";
import '../css/recipe.css'
 import { Link } from "react-router-dom";

const Recipe = ({label, image, calories, mealType, ingredientLines}) => {
    
    return (
        <Link to={`/show/${label}`}>
            <div className="recipe" >
                <h2>{label}</h2>
                <div className="imgContainer">
                    <img className="image" src={image} alt="" />
                </div>
            </div>
        </Link>
    )
}

export default Recipe;