import React, {useState, useEffect} from "react";

function CallFarm(props) {

    const [color, setColor] = useState("");

    useEffect(() => {
        console.log("Cell Farm render ...", props.number);
       if (props.number == 10) {
           setColor("cell-white");
       }
    });

    const drop = e => {
        console.log(e);
        setColor("cell-white");
        startProgress();
    }

    function startProgress() {
        console.log("startProgress ....");

        setTimeout(() => {
            console.log("Change color to default");
            setColor("");
        }, 3000);
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
        >
        </div>
    )
}

export default CallFarm;