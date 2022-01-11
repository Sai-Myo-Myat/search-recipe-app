import React, { useState } from "react";
import '../css/recipe.css'
 import { Link } from "react-router-dom";

const Recipe = ({label, image, calories, mealType, ingredientLines}) => {
    // const [facts, setFacts] = useState({});

    // const showedRecipe = () => {
    //     setFacts(
    //        {label: {label}, image: {image}, calories: {calories}}
    //     )
    //     console.log(facts)
    //     return <ShowedRecipe facts={facts}/>
    // }

    return (
        <Link to='/showingRecipe'>
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