import React, {useRef, useContext} from "react";
import Plant from "./Plant";
import UserObject from "../hooks/UserContext";

const Inventory = () => {
    const count = useRef(1);

    const {userFarm, _} = useContext(UserObject)


    function handleWheel(e) {
        e.preventDefault();
        let currentPosition = document.getElementById('inventory').scrollLeft;
        document.getElementById('inventory').scrollLeft = currentPosition + (e.deltaY * 20);
    }

    return (
        <div className="inventory" id="inventory" onWheel={handleWheel}>
            {userFarm.inventory.map((item, key) => <Plant key={key} id={key}>{count}</Plant>)}
        </div>
    )
};

export default Inventory;