import React, { Component } from 'react';
import './style.css';
import './space.jpeg'
class PopUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <section className="pop-up-render">
                <h1>HARWRK</h1>
                <button>{this.props.button}</button>
                <h3>Created By Hector Hernandez</h3>
            </section>
        )
    }
}

export default PopUp;