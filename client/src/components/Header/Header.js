import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron header text-center">
                    <p className="header_title">Let's Cook!</p>
                    <p className="header_description">Search recipes with specific ingredients</p>
                </div>
            </div>
        )
    }
};

export default Header;