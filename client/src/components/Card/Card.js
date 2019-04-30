import React from "react";
import { Link } from "react-router-dom";

const Card = props => (
    <div className="">
        <div className="row">
            { props.recipes.map((recipe) => {
                return (
                    
                        <div key={recipe.recipe.label} className="col-12 col-sm-6 col-md-4">
                            <div className="search_card shadow">
                                <img className="search_img" src={recipe.recipe.image} alt={recipe.recipe.label}></img>
                                <p className="recipe_title">{recipe.recipe.label}</p>
                                
                                <Link to={{ 
                                    pathname: `/recipe/${recipe.recipe.label}`,
                                    state: { recipe: recipe.recipe.uri }
                                }}><button className="btn btn-primary">View recipe</button></Link>
                                

                            </div>
                        </div>
                    
                )
            })}
        </div>
    </div>
);

export default Card;