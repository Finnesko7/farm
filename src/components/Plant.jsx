import React, {useEffect, useContext} from "react";

const Plant = (props) => {

    const context = useContext(userObject);

    function dragStart(e) {
        e.dataTransfer.setData('plant-id', e.target.id);
    }

    function dragEnd() {
        console.log("Drag end ...");
    }

    useEffect(() => {

    }, []);

    return <div className="plant">
        <div className="plant-title">Title plant</div>
        <div className="plant-body">
            <div className="plant-image"></div>
            <div className="plant-fruit-image"
                 draggable={true}
                 id={props.id}
                 onDragStart={dragStart}
                 onDragEnd={dragEnd}
            >
                {props.id}
            </div>
            <div className="plant-description"></div>
        </div>
    </div>
};

export default Plant;