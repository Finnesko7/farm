import React, {useContext} from "react";
import imgCherry from "../img/chery_market.svg"
import UserObject from "../hooks/UserContext";

const Seed = (props) => {
    const userFarm = useContext(UserObject)
    const buy = () => {
        userFarm.money -= 20;
        userFarm.inventory.push({
            title: "Mandarin",
            description: "per 6 day",
            namePlant: "mandarin"
        });

        console.log('inventory: ', userFarm.inventory);
        console.log('money: ', userFarm.money);
    }

    return (
        <div className="seed">
            <img src={imgCherry}></img>
            <div className="seed-name">{props.nameSeed}</div>
            <div className="seed-count">{props.perCount}</div>
            <div className="seed-price">{props.buy} $</div>
            <button className="seed-buy" onClick={buy}>Buy</button>
        </div>
    )
};

export default Seed;