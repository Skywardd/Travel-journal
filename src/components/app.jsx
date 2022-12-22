import React from "react";
import Nav from "./nav";
import places from "../db";
import Card from "./card";

function App(){ 

    const cards = places.map((place, index)=>{
        return <Card key={index} items={place} />
    })

    return( 
        <>
            <Nav />
            <section className="cards">
                {cards}
            </section>
     
        </>
    )
}


export default App;