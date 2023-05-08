import React, { useState } from "react";
import '../css/recipe.css'
 import { Link } from "react-router-dom";

const Recipe = ({label, image, calories, mealType, ingredientLines}) => {
    
    return (
        <Link to={`/show/${label}`}>
            <div className="recipe" >
                <h3>{label}</h3>
                <div className="imgContainer image" style={{
                    background: `url(${image})`,
                    backgroundSize: "contain"
                }}>
                </div>
            </div>
        </Link>
    )
}

export default Recipe;