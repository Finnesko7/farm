import React from "react";
import CallFarm from "./CellFarm";

const countCells = new Array(32);

const FieldFarm = () => {
    let cells = countCells.fill(1).map((_, key) => <CallFarm key={key} number={key}></CallFarm>);

    return (
        <div className="field-farm">{cells}</div>
        // <div className="field-farm">
        //     <CallFarm key={1} imageName="seedling"></CallFarm>
        //     <CallFarm key={2} imageName="single-tree"></CallFarm>
        //     <CallFarm key={3} imageName="seedling"></CallFarm>
        //     <CallFarm key={4} imageName="plum_tree_f"></CallFarm>
        // </div>
    )
};

export default FieldFarm;