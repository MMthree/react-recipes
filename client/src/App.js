import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
// import Chips from "./components/Chips/Chips";
import Card from "./components/Card/Card";
import axios from "axios";

const API_ID = process.env.REACT_APP_API_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;


class App extends Component {
  state = {
    searchTerms: [],
    recipes: [],
  }

  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeSearch.value;
    const query = `https://api.edamam.com/search?q=${recipeName}&app_id=${API_ID}&app_key=${APP_KEY}&from=0&to=18`;
    this.setState({ searchTerms: recipeName });
    axios.get(query)
    .then( response => {
    this.setState({ recipes: response.data.hits})
    })
  };

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes })
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    return (
        <div>
          <Header />

          <div className="container text-center">
            <div className="row">
              <Search getRecipe={this.getRecipe} />
            </div>

          
            <Card 
            recipes={this.state.recipes}
            />
          

          </div>
        </div>
    );
  }
}

export default App;
