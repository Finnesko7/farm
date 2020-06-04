import React, {useEffect, useState} from "react";

const Progress = () => {
    const [timer, setTimer] = useState(100);

    useEffect(() => {
        if (timer > 0) {
            startProgress();
        }
    }, [])

    const startProgress = () => {
        setTimeout(() => {
            let newTimer = timer - 1;
            setTimer(newTimer);
        }, 1000)
    }

    return (
        <div className="progress">{timer}</div>
    )
};

export default Progress