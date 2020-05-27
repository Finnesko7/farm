import React from "react";
import CallFarm from "./CellFarm";

const countCells = new Array(32);

const FieldFarm = () => {
    let cells = countCells.fill(1).map((_, key) => <CallFarm key={key} number={key}></CallFarm>);

    return <div className="field-farm">{cells}</div>
};

export default FieldFarm;