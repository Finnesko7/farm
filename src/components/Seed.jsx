import React, {useContext} from "react";
import UserObject from "../hooks/UserContext";

const Seed = (props) => {
    const {state, dispatch} = useContext(UserObject)

    const buy = () => {
        state.money -= props.price;
        if (state.money > 0) {
            dispatch(state)
        } else {
            alert("You don't have money for buy!")
        }
    }

    return (
        <div className="seed">
            <img src="public/images/chery_market.svg"></img>
            <div className="seed-name">{props.nameSeed}</div>
            <div className="seed-count">{props.perCount}</div>
            <div className="seed-price">{props.price} $</div>
            <button className="seed-buy" onClick={buy}>Buy</button>
        </div>
    )
};

export default Seed;