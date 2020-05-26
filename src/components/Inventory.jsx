import React, {Component} from "react";
import Plant from "./Plant";

class Inventory extends Component {

    constructor(props) {
        super(props);
        this.handleWheel = this.handleWheel.bind(this);
    }

    handleWheel(e) {
        e.preventDefault();
        let currentPosition = document.getElementById('inventory').scrollLeft;
        document.getElementById('inventory').scrollLeft = currentPosition + (e.deltaY * 20);
    }

    render() {
        return <div className="inventory" id="inventory" onWheel={this.handleWheel}>
            <Plant></Plant>
            <Plant></Plant>
            <Plant></Plant>
        </div>
    }
};

export default Inventory;