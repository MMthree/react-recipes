import React from "react";
import Header from "../Header/Header";
import axios from "axios";

const API_ID = "9e6d67a2";
const APP_KEY = "6a7ee4e4bd8663d94778899ede342852";

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = () => {
        const recipeID = this.props.location.state.recipe;
        const ID = recipeID.split("#");
        const req = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23${ID}&app_id=${API_ID}&app_key=${APP_KEY}`;
        axios.get(req)
        .then( response => {
        this.setState({ activeRecipe: response.data[0] })
        console.log(this.state.activeRecipe.calories)
        })
    }

    render() {
        const recipe = this.state.activeRecipe;
        return (
            <div>
                <Header />

                <div className="container">
                    <div className="row">
                        <div className="col-12 card">
                            <p className="text-center">Words</p>
                            <p className="text-center">WORDSS {recipe.calories}</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
        );
    }
};

export default Recipe;