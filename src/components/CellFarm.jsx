import React, {useState, useEffect, useContext} from "react";
import Progress from "./Progress";
import UserObject from "../hooks/UserContext";
import imageTest from "../img/tree_ico.png"


function CallFarm(props) {
    const userObject = useContext(UserObject);
    const [color, setColor] = useState("");
    const [image, setImage] = useState("");
    const [progressPlant, setProgressPlant] = useState("");


    import(`../img/${props.imageName}.png`).then(image => {
        setImage(image);
    });


    const drop = e => {
        e.preventDefault()
        console.log(e);
        setColor("cell-white");
        setProgressPlant(<Progress/>);
        startProgress();
        userObject.countPlants--;
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
            <div className="progress">

            </div>
            <img src={image.default}></img>
        </div>
    )
}

export default CallFarm;