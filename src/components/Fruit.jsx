import React from "react";
import imgCherry from "../img/chery_market.svg";

const Fruit = () => {
    return (
        <div className="fruit">
            <img src={imgCherry}></img>
            <div className="fruit-name">Cherry</div>
            <div className="fruit-count">1</div>
            <div className="fruit-price">12 $</div>
            <button className="fruit-sell">Sell</button>
        </div>
    )
}

export default Fruit;