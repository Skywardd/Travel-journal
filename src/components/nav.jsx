import React from "react"; 
import planet from "../images/plannet1.png"

function Nav (){
    return (
        <nav>
          <img className="nav--logo" src= {planet} alt="plannet-img"/> 
          <p className ="nav--title"> my travel journal.</p>
        </nav>
    )
}

export default Nav;