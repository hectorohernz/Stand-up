import React, { Component } from 'react';
import "./QuoteDash.css"
import Quote from './Quote'
class QuoteCon extends Component{
    render() {
        return (
            <article className="quote-container">
                <h1>Quote Of The Day</h1>
                <Quote/>
            </article>
        )
    }
}
export default QuoteCon;