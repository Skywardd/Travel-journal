import React from "react";
import pin from "../images/pin.png"

function Card(props){
    return(
        <div className= "location">
        <img className="location--image" src ={props.items.imageUrl} alt="places-img"/>
        <div className="location--info">
        <span className= "location--links">
        <img className= "pin"src= {pin} alt="pin-img"/> 
        <p className="location--name"> {props.items.location }</p>
        <a className="location--google" href={props.items.mapsLink}>View on Google Maps</a>
        </span>
        <h1 className="location--title">{props.items.title}</h1>
        <h3 className="location--period">{props.items.period.startDate} - {props.items.period.endDate}</h3>
        <p className="location--description">{props.items.description}</p>
        </div>
</div>
        )
}

export default Card;



// title:" Sydney Opera House" ,
// location:"AUSTRALIA" ,
// mapsLink: "https://www.google.com/maps/place/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%B0+%D0%B2+%D0%A1%D0%B8%D0%B4%D0%BD%D0%B8/@-33.8567799,151.213108,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967",
// period: {  
//     startDate: "27 May, 2021" ,
//     endDate: "8 Jun, 2021"
//  },
//  description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings" ,
//  imageUrl: "https://source.unsplash.com/JmuyB_LibRo"