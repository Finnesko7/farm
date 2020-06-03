import React, {useState, useRef, useContext} from "react";
import Progress from "./Progress";
import UserObject from "../hooks/UserContext";


function CallFarm(props) {
    const [color, setColor] = useState("");
    const {userFarm, dispatch} = useContext(UserObject);
    const [image, setImage] = useState("");
    const [progressPlant, setProgressPlant] = useState("");
    const plantName = useRef('')

    const drop = e => {
        e.preventDefault()
        if (plantName.current === '') {
            let id = e.dataTransfer.getData('id');
            plantName.current = e.dataTransfer.getData('name');

            delete userFarm.inventory[id];
            console.log('plantName.current:', plantName.current);
            dispatch(userFarm);
            setProgressPlant(<Progress/>);
            setImage(<img src="/public/images/seedling.png"></img>);
        }
    }

    const dragEnter = e => {
        e.preventDefault();
        if (plantName.current === '') {
            e.target.style.backgroundColor = 'greenyellow'
        } else {
            e.target.style.backgroundColor = 'red'
        }
    }

    function dragLeave(e) {
        e.target.style.backgroundColor = ''
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div
            id={props.number}
            onDrop={drop}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
        >
            {progressPlant}
            {image}
        </div>
    )
}

export default CallFarm;