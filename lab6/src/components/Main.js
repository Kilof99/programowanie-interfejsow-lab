import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ListOfAll from './ListOfAll.js';
import New from './New.js';
import {dbGet} from "../firebase.js";
import {dbAdd} from "../firebase.js";
import Login from './Login.js';
import Register from './Register.js';


class Main extends Component {
  state = {
    studentsList: dbGet()
  }

  addNew = (newStudent) => {
    const newId = this.state.studentsList.length;
    this.setState({
        studentsList: this.state.studentsList.concat({
        id: newId, 
        name: newStudent.name,
        desc: newStudent.desc,
        mail: newStudent.mail,
        tags: newStudent.tags
        })
    })
    dbAdd(newId, newStudent.name, newStudent.desc, newStudent.mail, newStudent.tags)
  }


  render() {
    return (

      <Switch>
        <Route path="/" exact>
          <section><ListOfAll todos={this.state.studentsList} /></section>
        </Route>
        <Route path="/new">
          <section><New adder={this.addNew} list={this.state.studentsList}/></section>
        </Route>
        <Route path="/lab6">
            <section><h1>Welcome</h1></section>
        </Route>
        <Route path="/login">
            <section><Login/></section>
        </Route>
        <Route path="/signup">
            <section><Register/></section>
        </Route>
        <Route>
          <section><h1>Error 404 - not found</h1></section>
        </Route>
      </Switch>
    );
  }
}

export default Main;