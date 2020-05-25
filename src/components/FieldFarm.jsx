import React from "react";

const countCells = new Array(32);

const FieldFarm = () => {
    let cells = countCells.fill(1).map((_, key) => <div key={key}></div>);

    return <div className="field-farm">{cells}</div>
};

export default FieldFarm;