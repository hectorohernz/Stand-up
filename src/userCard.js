import React, { Component } from 'react';
import './user.css';
class userCard extends Component{
    constructor(props){
    super(props);
        this.handUserStatus = this.handUserStatus.bind(this);
    }
    handUserStatus(evt){
        this.props.status(this.props.user)
    }

    render() {
        return (
            <div className={this.props.custom}>
                <h3>{this.props.name}</h3>
                <button onClick={this.handUserStatus}>Poke</button>
            </div>
        )
    }
};

export default userCard;