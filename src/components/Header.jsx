import React, {useContext, useState, useEffect} from 'react';
import imgCoin from "../img/coin.png"
import imgTree from "../img/tree_ico.png"
import userContext from "../hooks/UserContext"

export function Header(props) {

    const userFarm = useContext(userContext);

    const checkContext = () => {
        console.log("userFarm.inventory.length:", userFarm.money);
    }

    return (
        <header>
            <div className="header-title">
                <h1>Happy Farm</h1>
            </div>
            <div className="header-info">
                <div>
                    <button onClick={checkContext}>Click</button>
                    <img src={imgCoin}></img>
                    <span> {userFarm.money} $</span>
                </div>
                <div>
                    <img src={imgTree}></img>
                    <span> 10 </span>
                </div>
            </div>
        </header>
    )
}