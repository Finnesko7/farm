import React, {useContext, useEffect} from 'react';
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
                    <img src="/public/images/coin.png"></img>
                    <span> {state.money} $</span>
                </div>
                <div>
                    <img src="/public/images/tree_ico.png"></img>
                    <span> 10 </span>
                </div>
            </div>
        </header>
    )
}