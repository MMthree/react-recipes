import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import axios from "axios";

const API_ID = process.env.REACT_APP_API_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

class Recipe extends React.Component {
    state = {
        activeRecipe: [],
        ingredients: [],
        calories: ""
    }

    componentDidMount = () => {
        const recipeID = this.props.location.state.recipe;
        const ID = recipeID.split("#");
        const req = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23${ID}&app_id=${API_ID}&app_key=${APP_KEY}`;
        axios.get(req)
        .then( response => {
        const round = Math.round(response.data[0].calories);
        this.setState({ calories: round });
        this.setState({ activeRecipe: response.data[0] });
        this.setState({ ingredients: response.data[0].ingredientLines});
        });
    };

    render() {
        const recipe = this.state.activeRecipe;
        return (
            <div>
                <Header />

                <div className="container">

                    <div className="row mb-0 mt-5">
                        <Link className="mx-auto" to="/">
                            <button className="mx-auto btn recipeSearch_btn">Back to Results</button>
                        </Link>
                    </div>

                        <div className="col-12 search_card mt-0 shadow">
                            <div className="row">
                                <div className="col-12 col-sm-5 my-auto px-0">
                                    <img className="recipe_img" alt={recipe.label} src={recipe.image} width="100%"></img>
                                </div>
                                <div className="col-12 col-sm-7 py-3">
                                    <h3 className="text-center">{recipe.label}</h3>
                                    <h6 className="ingredient_title">CALORIES: {this.state.calories}</h6>
                                    <h6 className="ingredient_title">INGREDIENTS:</h6>
                                    { this.state.ingredients.map((res) => {
                                        return(
                                            <div>
                                                <ul>
                                                    <li>{res}</li>
                                                </ul>
                                            </div>
                                        )
                                    })}
                                    <div className="my-3">
                                        <h6 className="ingredient_title">Source: {recipe.source}</h6>
                                        <button className="btn recipeSearch_btn"><a href={recipe.url} target="_blank">Find The Full Recipe Instructions Here</a></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    
                </div>
                
                
            </div>
        );
    }
};

export default Recipe;