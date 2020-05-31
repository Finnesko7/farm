import React from 'react';
import imgCoin from "../img/coin.png"
import imgTree from "../img/tree_ico.png"

export function Header(props) {
    return (
        <header>
            <div className="header-title">
                <h1>Happy Farm</h1>
            </div>
            <div className="header-info">
                <div>
                    <img src={imgCoin}></img>
                    <span> 10 029 $</span>
                </div>
                <div>
                    <img src={imgTree}></img>
                    <span> 15</span>
                </div>
            </div>
        </header>
    )
}