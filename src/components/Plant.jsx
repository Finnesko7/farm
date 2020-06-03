import React, {useEffect, useContext, useState} from "react";
import UserObject from "../hooks/UserContext";

const Plant = (props) => {
    const userObject = useContext(UserObject);
    const [count, setCount] = useState(userObject.countPlants);


    function dragStart(e) {
        e.dataTransfer.setData('plant-id', e.target.id);
    }

    function dragEnd(e) {
        console.log("Drag end ...");
        console.log("changed count plants:", userObject.countPlants);
        setCount(userObject.countPlants)
    }

    return (
        <div className="plant">
            <div className="plant-title">
                <div>Cherry tree</div>
                <div className="count">{count}</div>
            </div>
            <div className="plant-body">
                <div className="plant-image"
                     onDragStart={dragStart}
                     onDragEnd={dragEnd}
                >
                    <img src="/public/images/tree/apple.png"></img>
                </div>
                <div className="plant-fruit-image"
                     draggable={true}
                     id={props.id}
                     onDragStart={dragStart}
                     onDragEnd={dragEnd}
                >
                    <img src="/public/images/plant/apple.png"></img>
                </div>
                <div className="plant-description">
                    <p>6 fruits</p>
                    <p>per day</p>
                </div>
            </div>
        </div>
    )
};

export default Plant;