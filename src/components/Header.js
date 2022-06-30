import React from "react";

const Header = ({ headerText }) => {
    return(
        <div className="header">
            <h1>{headerText}</h1>
            <h2>Feel The Groove Baby!</h2>
        </div>
    )
}

export default Header;