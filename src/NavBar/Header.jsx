import React from "react";
import NavBarBs from "./NavBarBs";


function Header(){
    return(
        <div className="Header">
            <img className="Logo" src="./logo.png" alt="Logo" />
            <h1 className="Titulo">Tuco y Pesto</h1>
            <NavBarBs></NavBarBs>
        </div>)
}

export default Header