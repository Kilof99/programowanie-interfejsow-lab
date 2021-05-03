import React, { Component } from 'react';
import Box from './Box.js';

class New extends Component {
    state = {
        newName: "",
        newDesc: "",
        newMail: "",
        newTags: "",
        showWarning: false
    }
    errorMessage = "Wymagany jest unikalny adres e-mail";

    handleNewName = (event) => {
        this.setState({
            newName: event.target.value
        })
    }
	
	handleNewMail = (event) => {
        this.setState({
            newMail: event.target.value
        })
    }
	
	handleNewDesc = (event) => {
        this.setState({
            newDesc: event.target.value
        })
    }
	
	handleNewTags = (event) => {
        this.setState({
            newTags: event.target.value
        })
    }
    

    append = () => {
        if(this.state.newMail === "" || this.props.list.some(student => student.mail === this.state.newMail)){
            this.setState({
                showWarning: true
            })
        } else {
            const tagsArr = this.state.newTags.split(', ')
            const newStudent = {
                name: this.state.newName,
                mail: this.state.newMail,
                desc: this.state.newDesc,
                tags: tagsArr
            }
            this.props.adder(newStudent)
            this.setState({
                newName: "",
                newDesc: "",
                newMail: "",
                newTags: "",
                showWarning: false
            })
        }
        
    }

    render() {
        return (
        <>
                <Box
					id="name"
					label="Imię i nazwisko: "
                    newItemValue={this.state.newName}
                    handleOnChange={this.handleNewName}
                />
				<Box
					id="desc"
					label="Opis: "
                    newItemValue={this.state.newDesc}
                    handleOnChange={this.handleNewDesc}
                />
				<Box
					id="mail"
					label="Adres e-mail: "
                    newItemValue={this.state.newMail}
                    handleOnChange={this.handleNewMail}
                />
				<Box
					id="tags"
					label="Tagi (rozdzielone przecinkiem i spacją): "
                    newItemValue={this.state.newTags}
                    handleOnChange={this.handleNewTags}
                />
            <button onClick={this.append}>Dodaj</button> 
            {this.state.showWarning && <h1 className="err">{this.errorMessage}</h1> }
        </>
        );
    }
}

export default New;