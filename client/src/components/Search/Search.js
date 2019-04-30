import React from "react";


const Search = props => (

    <div className="col-8 mx-auto my-3">
        <form onSubmit={props.getRecipe}>
            <div className="input-group">
                <input className="form-control shadow-none" placeholder="Search..." name="recipeSearch" type="text"></input>
                <div className="input-group-append">
                    <button className="btn recipeSearch_btn shadow-none">Search</button>
                </div>
            </div>
        </form>
    </div> 
    
);

export default Search;