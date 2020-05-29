import React, {useState, useEffect} from "react";
import Progress from "./Progress";

function CallFarm(props) {

    const [color, setColor] = useState("");
    const [progressPlant, setProgressPlant] = useState("");

    useEffect(() => {
        console.log("Cell Farm render ...", props.number);
       if (props.number == 10) {
           setColor("cell-white");
       }
    });

    const drop = e => {
        console.log(e);
        setColor("cell-white");
        setProgressPlant(<Progress/>);
        startProgress();
    }

    function startProgress() {
        console.log("startProgress ....");

        setTimeout(() => {
            console.log("Change color to default");
            setColor("");
        }, 3000);
    }

    function dragEnter(element) {
        console.log("dragEnter", element);
    }

    function dragLeave(element) {

    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div
            className={color}
            id={props.number}
            onDrop={drop}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
        >
            {progressPlant}
        </div>
    )
}

export default CallFarm;