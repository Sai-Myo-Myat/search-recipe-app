import React, { useState } from "react";
import '../css/showedRecipe.css'

const ShowedRecipe = ({facts}) => {
    return (
        <div className="showedRecipe">
        {/* <h2>{facts.label}</h2>
        <div className="imgContainer">
            <img className="image" src={facts.image} alt="" />
        </div>
        <h5>{facts.calories}</h5>
        <h5>{mfealType}</h5>
        <ol>
            {ingredientLines.map(ingredient => {
                return <li>{ingredient}</li>
            })}
        </ol> */}
        <h1>Showing Recipe</h1>
    </div>
    )
}

export default ShowedRecipe;