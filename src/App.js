import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//importing components
import RecipeContainer from "./components/recipeContainer";
import ShowedRecipe from "./components/showRecipe";

function App() {
  const APP_ID = "18a8f575";
  const APP_KEY = "35cd8526a5186be8180e420251411b0d";
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchFood = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  // const exampleRequest =
  // `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const fetchData = async () => {
    try {
      const apiData = await fetch(
        `https://api.edamam.com/search?q=${query ? query : "ice cream"}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const Data = await apiData.json();
      console.log(Data.hits);
      setRecipes(Data.hits);
    } catch (error) {
      setRecipes([])
      console.log("fetching error, ", error)
    }
  };

  return (
    <div className="App">
      <form className="form" onSubmit={searchFood}>
        <input
          value={search}
          onChange={updateSearch}
          type="text"
          name="search"
          id="search"
        />
        <button>search</button>
      </form>
      <Router>
        <Routes>
          <Route path="/" element={<RecipeContainer recipes={recipes} />} />
          <Route
            path="/show/:label"
            element={<ShowedRecipe recipes={recipes} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
