import React, {useContext} from "react";
import UserObject from "../hooks/UserContext";

const Seed = (props) => {
    const {userFarm, dispatch} = useContext(UserObject)

    const buy = () => {
        userFarm.money -= props.price;
        if (userFarm.money > 0) {
            dispatch(userFarm)
        } else {
            alert("You don't have money for buy!")
        }
    }

    return (
        <div className="seed">
            <img src={props.image}></img>
            <div className="seed-name">{props.nameSeed}</div>
            <div className="seed-count">{props.perCount}</div>
            <div className="seed-price">{props.price} $</div>
            <button className="seed-buy" onClick={buy}>Buy</button>
        </div>
    )
};

export default Seed;