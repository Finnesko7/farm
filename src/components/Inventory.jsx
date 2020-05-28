import React, {useState, useEffect, useRef} from "react";
import Plant from "./Plant";

const Inventory = (props) => {
    const [plantArr, setPlant] = useState([1]);
    const timerId = useRef(null);
    const count = useRef(1);

    useEffect(() => {
        timerId.current = setTimeout(() => {
            if (plantArr.length < 3) {
                count.current++;
                setPlant([...plantArr, count.current]);
            }
        }, 3000);
    }, [count.current]);

    function handleWheel(e) {
        e.preventDefault();
        let currentPosition = document.getElementById('inventory').scrollLeft;
        document.getElementById('inventory').scrollLeft = currentPosition + (e.deltaY * 20);
    }

    return (
        <div className="inventory" id="inventory" onWheel={handleWheel}>
            {plantArr.map((key) => <Plant key={key} id={key}>{count}</Plant>)}
        </div>
    )
};

export default Inventory;