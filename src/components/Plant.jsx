import React, {useEffect, useContext, useState} from "react";
import UserObject from "../hooks/UserContext";

const Plant = (props) => {

    const imagePlant = "/public/images/plant/";
    const imageTree = "/public/images/tree/";

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
                <div>{props.title}</div>
                <div className="count">N</div>
            </div>
            <div className="plant-body">
                <div className="plant-image"
                     onDragStart={dragStart}
                     onDragEnd={dragEnd}
                >
                    <img src={imageTree + props.namePlant + ".png"}></img>
                </div>
                <div className="plant-fruit-image"
                     draggable={true}
                     id={props.id}
                     onDragStart={dragStart}
                     onDragEnd={dragEnd}
                >
                    <img src={imagePlant + props.namePlant + ".png"}></img>
                </div>
                <div className="plant-description">
                    {props.description}
                </div>
            </div>
        </div>
    )
};

export default Plant;