import React, {Component} from 'react';
import ReactDom from 'react-dom';
import "./style/App.scss"
import {Header} from "./components/Header";
import FieldFarm from "./components/FieldFarm";

class App extends Component {
    render() {
        return <div>
            <Header/>
            <div className="section-1">
                <FieldFarm/>
            </div>
        </div>
    }
}

ReactDom.render(<App/>, document.getElementById('app'));