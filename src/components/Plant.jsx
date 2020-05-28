import React, {useState, useEffect} from "react";

const Plant = (props) => {

    function dragStart(e) {
        e.dataTransfer.setData('plant-id', e.target.id);
    }

    return <div className="plant">
        <div className="plant-title">Title plant</div>
        <div className="plant-body">
            <div className="plant-image"></div>
            <div className="plant-fruit-image"
                 draggable={true}
                 id={props.id}
                 onDragStart={dragStart}
            >
                {props.id}
            </div>
            <div className="plant-description"></div>
        </div>
    </div>
};

export default Plant;