import React from "react";

const pathPlant = "/public/images/plant/";
const pathTree = "/public/images/tree/";

const Plant = props => {

    const dragStart = e => {
        console.log("e.target.id", e.target.id)
        e.dataTransfer.setData('id', e.target.id);
        e.dataTransfer.setData('name', e.target.name.toLowerCase());
        console.log("dragStart - dataTransfer:", e.dataTransfer)
    }

    return (
        <div className="plant">
            <div className="plant-title">
                <div>{props.title}</div>
                <div className="count"></div>
            </div>
            <div className="plant-body">
                <div className="plant-image">
                    <img
                        draggable
                        onDragStart={dragStart}
                        name={props.namePlant}
                        id={props.id}
                        src={`${pathTree}${props.namePlant}.png`}
                    ></img>
                </div>
                <div className="plant-fruit-image">
                    <img
                        draggable
                        onDragStart={dragStart}
                        name={props.namePlant}
                        id={props.id}
                        src={`${pathPlant}${props.namePlant}.png`}
                    ></img>
                </div>
                <div className="plant-description">
                    {props.description}
                </div>
            </div>
        </div>
    )
};

export default Plant;