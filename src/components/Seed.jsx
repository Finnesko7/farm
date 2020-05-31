import React from "react";
import imgCherry from "../img/chery_market.svg"

const Seed = () => {
    return (
        <div className="seed">
            <img src={imgCherry}></img>
            <div className="seed-name">Cherry</div>
            <div className="seed-count">1</div>
            <div className="seed-price">12 $</div>
            <button className="seed-buy">Buy</button>
        </div>
    )
};

export default Seed;