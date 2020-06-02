import React, {useContext, useEffect} from "react";
import imgCherry from "../img/chery_market.svg"
import UserObject from "../hooks/UserContext";

const Seed = (props) => {
    const {state, dispatch} = useContext(UserObject)

    const buy = () => {
        let money = state.money - props.price
        state.money = 120;
        dispatch(state)
    }

    return (
        <div className="seed">
            <img src={imgCherry}></img>
            <div className="seed-name">{props.nameSeed}</div>
            <div className="seed-count">{props.perCount}</div>
            <div className="seed-price">{props.price} $</div>
            <button className="seed-buy" onClick={buy}>Buy</button>
        </div>
    )
};

export default Seed;