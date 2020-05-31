import React from "react";
import Fruit from "./Fruit";

const Barn = () => {
    return (
        <div className="barn">
            <div className="barn-title">Barn</div>
            <div className="barn-list">
                <Fruit/>
                <Fruit/>
                <Fruit/>
                <Fruit/>
                <Fruit/>
                <Fruit/>
                <Fruit/>
                <Fruit/>
                <Fruit/>
            </div>
        </div>
    )
};

export default Barn;