import React, {useContext} from "react";
import Plant from "./Plant";
import UserObject from "../hooks/UserContext";

const Inventory = () => {

    const {userFarm, _} = useContext(UserObject)

    const handleWheel = e => {
        e.preventDefault();
        let currentPosition = document.getElementById('inventory').scrollLeft;
        document.getElementById('inventory').scrollLeft = currentPosition + (e.deltaY * 20);
    }

    return (
        <div className="inventory" id="inventory" onWheel={handleWheel}>
            {userFarm.inventory.map((item, key) =>
                <Plant
                    key={key}
                    id={key}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    namePlant={item.namePlant}
                >
                </Plant>)}
        </div>
    )
};

export default Inventory;