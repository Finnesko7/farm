import React from "react";

const imagePlant = "/public/images/plant/";
const imageTree = "/public/images/tree/";

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
                        onDragStart={dragStart}
                        name={props.namePlant}
                        id={props.id}
                        src={imageTree + props.namePlant + ".png"}
                    ></img>
                </div>
                <div className="plant-fruit-image">
                    <img
                        draggable={true}
                        onDragStart={dragStart}
                        name={props.namePlant}
                        id={props.id}
                        src={imagePlant + props.namePlant + ".png"}
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