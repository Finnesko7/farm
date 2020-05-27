import React from "react";

function CallFarm(props) {

    const drop = e => {
        e.preventDefault();
        console.log(e.dataTransfer.getData('plant-id'));
        const plantId = e.dataTransfer.getData('plant-id');
        const plant = document.getElementById(plantId);
        plant.style.display = 'block';
        plant.style.background = 'black';

        e.target.appendChild(plant)
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div
            id={props.number}
            onDrop={drop}
            onDragOver={dragOver}
        >
        </div>
    )
}

export default CallFarm;