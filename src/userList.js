import React, { Component } from 'react';
import './App.css';
import User from './userCard';

/* Array.prototype.shuffle = function(){
    let i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor( Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
    return this;
} */
class UserList extends Component{
    constructor(props){
        super(props);
        this.state = {
            classA:[
              {id:1, name:'Adrian Diaz', stand:false},
              {id:2, name:'Adrianna Isom-Owen',stand:false},
              {id:3, name:'Alan Vang',stand:false},
              {id:4, name:'Alonso Castilleja',stand:false},
              {id:5, name:'Ana Ruiz Rivera',stand:false},
              {id:6, name:'Atherton Xiong',stand:false},
              {id:7, name:'Austin Cordova',stand:false},
              {id:8, name: 'Cody Gilliam',stand:false},
              {id:9, name:'Darwin Bueso',stand:false},
              {id:10, name:'Grant Morgan',stand:false},
              {id:11, name:'Gustavo Ortiz',stand:false},
              {id:12, name:'Hector Hernandez',stand:false},
              {id:13, name:'Isaiah Brown',stand:false},
              {id:14, name:'Jackie Kurien',stand:false},
              {id:15, name:'Jordan Guzman',stand:false},
              {id:17, name:'Jose Perez',stand:false},
              {id:18, name:'Nathan Tadesse',stand:false},
              {id:19, name:'Nicolas Conaway',stand:false},
              {id:20, name:'Quinton Brown',stand:false},
              {id:21, name:'Rida Fatimah',stand:false},
              {id:22, name:'Sam Mai',stand:false},
              {id:23, name:'Skyler Kojiro Higgins',stand:false},
              {id:24, name:'Veronica Barcia',stand:false},
              {id:25, name:'Zell Myles',stand:false}
            ],
            haveGone:[]
        };
        this.randomUser = this.randomUser.bind(this);
        this.userStatus = this.userStatus.bind(this);
      };
      randomUser(){
        let array = this.state.classA;
         var m = array.length, t, i;

         // While there remain elements to shuffle…
         while (m) {
           // Pick a remaining element…
           i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
           array[i] = t;
         }

        this.setState({classA:this.state.classA})
        this.setState({haveGone:[]})
        this.setState(prevState => ({ classA: prevState.classA.map( user => Object.assign(user, { stand:false }))
        }))
       }

    userStatus(id){
        const user = this.state.classA.find(el => el.id === id);
        this.state.haveGone.push(user);
        this.setState(prevState => ({
            classA: prevState.classA.map(
                user => (user.id === id ? Object.assign(user, { stand:true }): user)
            )
        }));
    }

    render() {
        let userCards = this.state.classA.map(el =>(
            <User name={el.name} key={el.id} user={el.id} custom={el.stand ? 'user poked': 'user unpoked'} status={this.userStatus}/>    
        ));
        console.log(this.state.haveGone)
        return (
            <div className="userlist">

                <section className="userList-container">
                    <button onClick={this.randomUser} className="generate-btn">Generate</button>
                    {userCards}
                </section>

                <article className="poked-container">
                    <h1>People Who Have Gone: </h1>
                    <ul className="listed-poked">
                        {this.state.haveGone.map( el => (
                            <li>{el.name}</li>
                        ))}
                    </ul>
                </article>

            </div>
        )
    }
}

export{
    UserList
};