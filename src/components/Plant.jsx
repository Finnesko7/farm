import React from "react";
const imagePlant = "/public/images/plant/";
const imageTree = "/public/images/tree/";

const Plant = (props) => {

    function dragStart(e) {
        console.log("e.target.id", e.target.id)
        e.dataTransfer.setData('id', e.target.id);
        e.dataTransfer.setData('name', e.target.name.toLowerCase());
        console.log("dragStart - dataTransfer:", e.dataTransfer)
    }

    function dragEnd(e) {
        console.log("Drag end ...");
    }

    return (
        <div className="plant">
            <div className="plant-title">
                <div>{props.title}</div>
                <div className="count"></div>
            </div>
            <div className="plant-body">
                <div className="plant-image"
                     onDragStart={dragStart}
                     onDragEnd={dragEnd}
                >
                    <img id={props.id} name={props.namePlant } src={imageTree + props.namePlant + ".png"}></img>
                </div>
                <div className="plant-fruit-image"
                     draggable={true}
                     onDragStart={dragStart}
                     onDragEnd={dragEnd}
                >
                    <img id={props.id} name={props.namePlant } src={imagePlant + props.namePlant + ".png"}></img>
                </div>
                <div className="plant-description">
                    {props.description}
                </div>
            </div>
        </div>
    )
};

export default Plant;