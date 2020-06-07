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
                setImage(<img src="/public/images/middle_tree.png"></img>);
                break;
            case 'finish':
                setImage(<img onClick={harvest} src={`/public/images/${plantName.current}_tree_f.png`}></img>);
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
            setImage(<img src="/public/images/seedling.png"></img>);
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
        console.log("harvest ..." , plantName.current);

        let count = Math.floor(Math.random() * 5);
        count = count === 0 ? 1 : count;
        console.log('count', count);
        if (finish.current) {
            userFarm.barn.push({
                name: plantName.current,
                count: count,
                sale: userFarm.sale * count
            })

            setProgressPlant('');
            setImage('');
            plantName.current = '';

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
            {image}
        </div>
    )
}

export default CallFarm;