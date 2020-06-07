import React, {useContext} from "react";
import UserObject from "../hooks/UserContext";

const Fruit = ({id, name, sale, count}) => {
    const {userFarm, setUserFarm} = useContext(UserObject);

    const sell = () => {
        userFarm.money += sale;
        userFarm.barn.splice(id, 1);

        setUserFarm(userFarm)
    }

    return (
        <div className="fruit">
            <div className="fruit-image"><img src={`/public/images/plant/${name}.png`}></img></div>
            <div className="fruit-name">{name}</div>
            <div className="fruit-count">{count}</div>
            <div className="fruit-price">{sale} $</div>
            <button className="fruit-sell" onClick={sell}>Sell</button>
        </div>
    )
}

export default Fruit;