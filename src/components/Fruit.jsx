import React from "react";

const Fruit = () => {
    return (
        <div className="fruit">
            <img src="/public/images/chery_market.svg"></img>
            <div className="fruit-name">Cherry</div>
            <div className="fruit-count">1</div>
            <div className="fruit-price">12 $</div>
            <button className="fruit-sell">Sell</button>
        </div>
    )
}

export default Fruit;