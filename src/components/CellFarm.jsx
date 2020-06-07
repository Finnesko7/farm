import React, {useState, useRef, useContext} from "react";
import Progress from "./Progress";
import UserObject from "../hooks/UserContext";


const CallFarm = props => {
    const [color, setColor] = useState({backgroundColor: ''});
    const {userFarm, setUserFarm} = useContext(UserObject);
    const [image, setImage] = useState("");
    const [progressPlant, setProgressPlant] = useState("");
    const plantName = useRef('')
    const finish = useRef(false)


    const handelTree = step => {
        switch (step) {
            case 'middle':
                setImage('/public/images/middle_tree.png');
                break;
            case 'finish':
                setImage(`/public/images/${plantName.current}_tree_f.png`);
                finish.current = true;
                break;
            default:
                console.log("Error execute handelTree, step not found: ", step)
        }
    }

    const drop = e => {
        e.preventDefault()
        if (plantName.current === '') {
            let id = e.dataTransfer.getData('id');

            plantName.current = e.dataTransfer.getData('name');

            userFarm.inventory.splice(id, 1);
            setUserFarm(userFarm);
            setProgressPlant(<Progress setTree={handelTree}/>);
            setImage('/public/images/seedling.png');
            setColor({backgroundColor: ''});
        }
    }

    const dragEnter = e => {
        e.preventDefault();

        if (plantName.current === '') {
            setColor({
                backgroundColor: 'greenyellow'
            });
        } else {
            setColor({backgroundColor: 'red'});
        }
    }

    const dragLeave = e => {
        setColor({backgroundColor: ''});
    }

    const dragOver = e => {
        e.preventDefault();
    }

    const harvest = () => {
        if (finish.current) {
            console.log("harvest ...", plantName.current);

            let count = Math.floor(Math.random() * 5);
            count = count === 0 ? 1 : count;
            console.log('count', count);

            userFarm.barn.push({
                name: plantName.current,
                count: count,
                sale: userFarm.sale * count
            })

            setProgressPlant('');
            setImage('');
            plantName.current = '';
            finish.current = false;
            setUserFarm(userFarm);
        }
    }

    return (
        <div
            style={color}
            id={props.number}
            onDrop={drop}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
        >
            {progressPlant}
            {image && <img src={image} onClick={harvest}></img>}
        </div>
    )
}

export default CallFarm;