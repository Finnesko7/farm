import React, {useContext, useEffect} from 'react';
import imgCoin from "../img/coin.png"
import imgTree from "../img/tree_ico.png"
import UserObject from "../hooks/UserContext";

export function Header(props) {

    const {state, dispatch} = useContext(UserObject)

    const checkContext = () => {
        // console.log("userFarm.inventory.length:", userFarm.money);
    }

    useEffect(() => {
        console.log("userFarm:", state)
    })

    return (
        <header>
            <div className="header-title">
                <h1>Happy Farm</h1>
            </div>
            <div className="header-info">
                <div>
                    <button onClick={checkContext}>Click</button>
                    <img src={imgCoin}></img>
                    <span> {state.money} $</span>
                </div>
                <div>
                    <img src={imgTree}></img>
                    <span> 10 </span>
                </div>
            </div>
        </header>
    )
}