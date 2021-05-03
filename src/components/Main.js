import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ListOfAll from './ListOfAll.js'
import New from './New.js'

class Main extends Component {
  state = {
    studentsList: [{
        id: 0,
        name: "Adam Anachroniczny",
        mail: "aa@student.pwr.edu.pl",
        desc: "Ma problemy z rozplanowywaniem czasu ale wykonuje zadania jak należy",
        tags: ["SQL", "Python"]
    },
    {
        id: 1,
        name: "Beata Bonkująca",
        mail: "bb@student.pwr.edu.pl",
        desc: "",
        tags: ["JavaScript", "Java", "HTML"]
    },
    {
        id: 2,
        name: "Moca Aoba",
        mail: "bread@bread.bread",
        desc: "bread",
        tags: ["bread"]
    }]
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
        <Route path="/lab5">
            <section><h1>Welcome</h1></section>
        </Route>
        <Route>
          <section><h1>Error 404 - not found</h1></section>
        </Route>
      </Switch>
    );
  }
}

export default Main;