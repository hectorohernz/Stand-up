import React, { Component } from 'react';
import "./QuoteDash.css"
const axios = require('axios');
class Quote extends Component{
    constructor(props){
        super(props);
        this.state = {
            Quote: null
        }
    }
    componentDidMount() {
        axios.get('https://api.paperquotes.com/apiv1/quotes/?lang=en', {
        headers: {
            "Authorization": process.env.TOKEN //the token is a variable which holds the token
            }
        })
      .then(res => {
        const persons = res.data.results[4].quote;
        this.setState(st => ({
            Quote: persons
        }))
      })
  }
    
    render() {
        return (
            <h3 className="quote">{this.state.Quote}</h3>
        )
    }
}

export default Quote; 