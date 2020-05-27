import React, {Component} from "react";

class Seed extends Component {

    constructor(props) {
        super(props);
        this.handleDragStart = this.handleDragStart.bind(this);
    }

    handleDragStart(e) {
        console.log('element', e);

        // e.style.backgroundColor = 'black';
    }

    render() {
        return <div className="seed" draggable="true" onDragStart={this.handleDragStart}></div>
    }
};

export default Seed;