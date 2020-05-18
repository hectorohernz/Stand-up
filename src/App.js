import React, { Component } from 'react';
import './App.css';
import { UserList } from './userList';
import QuoteDash from './quoteDash'
class App extends Component{
  
  render() {
    return (
      <div className="Main">

        <header>
          <h1 className="logo">Stand Up</h1>
        </header>

        <section className="userList">
          <UserList/>
        </section>

        <section className="dashboard-quote">
          <QuoteDash/>
        </section>


        <section className="feed">

        </section>
      </div>
    )
  }
}

export default App;
