import React, {useContext} from "react";
import UserObject from "../hooks/UserContext";

const Seed = (props) => {
    const imagePath = "/public/images/tree/";
    const {userFarm, dispatch} = useContext(UserObject)

    const buy = () => {
        userFarm.money -= props.price;
        if (userFarm.money > 0) {
            userFarm.inventory.push({
                title: capitalize(props.nameSeed),
                description: props.description,
                namePlant: props.nameSeed,
            })
            dispatch(userFarm)
        } else {
            alert("You don't have money for buy!")
        }
    }

    return (
        <div className="seed">
            <div className="seed-image"><img src={imagePath + props.nameSeed + ".png"}></img></div>
            <div className="seed-name">{props.nameSeed}</div>
            <div className="seed-count">{props.perCount}</div>
            <div className="seed-price">{props.price} $</div>
            <button className="seed-buy" onClick={buy}>Buy</button>
        </div>
    )
};

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export default Seed;