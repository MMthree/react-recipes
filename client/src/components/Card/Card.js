import React from "react";
import { Link } from "react-router-dom";

const Card = props => (

    <div className="my-3">
        <div className="row">
            { props.recipes && props.recipes.map((recipe) => {
                return (
                    
                    <div key={recipe.recipe.label} className="col-12 col-sm-6 col-md-4">
                        <div className="search_card shadow-lg">
                            <img className="search_img" src={recipe.recipe.image} alt={recipe.recipe.label}></img>
                                
                                <div className="search_info py-3">
                                    <p className="recipe_title">{recipe.recipe.label}</p>
                                    <p className="health_label">{recipe.recipe.healthLabels }</p>
                              
                                    
                                    <Link to={{ 
                                        pathname: `/recipe/${recipe.recipe.label}`,
                                        state: { recipe: recipe.recipe.uri }
                                    }}><button className="btn recipeSearch_btn">View Recipe</button></Link>
                                </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
);

export default Card;