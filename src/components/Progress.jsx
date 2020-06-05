import React, {useEffect, useState} from "react";

const Progress = ({setTree}) => {
    const [timer, setTimer] = useState(0);
    const [color, setColor] = useState({backgroundColor: 'grey'})

    useEffect(() => {
        if (timer < 100) {
            startProgress();

            if (timer === 50) {
                setTree('middle');
            }
        } else {
            setTree('finish');
            setColor({backgroundColor: 'orange'})
        }
    }, [timer])

    const startProgress = () => {
        setTimeout(() => {
            setTimer(timer+10);
        }, 1000)
    }

    return (
        <div className="progress" style={color}>
            {timer}%
        </div>
    )
};

export default Progress