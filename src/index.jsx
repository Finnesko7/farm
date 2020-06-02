import React, {Component, useReducer} from 'react';
import ReactDom from 'react-dom';
import "./style/App.scss"
import {Header} from "./components/Header";
import FieldFarm from "./components/FieldFarm";
import Barn from "./components/Barn";
import Market from "./components/Market";
import Inventory from "./components/Inventory";
import ContextFarm from "./hooks/UserContext";
import UserReducer from "./hooks/userRedux";
import UserFarm from "./UserFarm";

const App = () => {
    const [state, dispatch] = useReducer(UserReducer, UserFarm);

    return (
        <ContextFarm.Provider value={{dispatch, state}}>
            <div>
                <Header/>
                <div className="section-1">
                    <FieldFarm/>
                    <div className="barn-market">
                        <Barn/>
                        <Market/>
                    </div>
                </div>

                <section className="section-2">
                    <Inventory/>
                </section>
            </div>
        </ContextFarm.Provider>
    )
}

ReactDom.render(<App/>, document.getElementById('app'));