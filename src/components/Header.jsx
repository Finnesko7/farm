import React, {useContext, useEffect} from 'react';
import UserObject from "../hooks/UserContext";

export function Header(props) {

    const {userFarm, _} = useContext(UserObject)


    return (
        <header>
            <div className="header-title">
                <h1>Happy Farm</h1>
            </div>
            <div className="header-info">
                <div>
                    <img src="/public/images/coin.png"></img>
                    <span> {userFarm.money} $</span>
                </div>
                <div>
                    <img src="/public/images/tree_ico.png"></img>
                    <span> {userFarm.inventory.length} </span>
                </div>
            </div>
        </header>
    )
}