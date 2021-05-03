
function hashCode(str) {
    let hash = 0;
    if (str.length == 0) return hash;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

const Student = (props) => (
    <div className="card text-white bg-success mb-3">
	<p><b>Imię:</b> {props.name}</p>
	<p><b>Opis:</b> {props.desc}</p>
	<p><b>Mail:</b> {props.mail}</p>
	<p><b>Tagi:</b> {props.tags.join(', ')}</p>
	</div>
)

const Box = (props) => {
    return (
	<>
	<p>
		<label className="boxlabel" htmlFor={props.id}>{props.label}</label>
        <input
			id={props.id}
            type="text"
            name="newItemValue"
            value={props.newItemValue}
            onChange={props.handleOnChange}
            onKeyDown={props.handleOnKey}
        />
	</p>
	</>
)
}

class StudentsList extends React.Component {
	state = {
		tagsDict: ["bread", "HTML", "Java", "JavaScript", "Python", "SQL"],
		studentsList: [{
			name: "Adam Anachroniczny",
			mail: "aa@student.pwr.edu.pl",
			desc: "Ma problemy z rozplanowywaniem czasu ale wykonuje zadania jak należy",
			tags: ["SQL", "Python"]
		},
		{
			name: "Beata Bonkująca",
			mail: "bb@student.pwr.edu.pl",
			desc: "",
			tags: ["JavaScript", "Java", "HTML"]
		},
		{
			name: "Moca Aoba",
			mail: "bread@bread.bread",
			desc: "bread",
			tags: ["bread"]
		}],
        newName: "",
		newMail: "",
		newDesc: "",
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
	
	addToDict(tag, index, arr){
		if(!(this.state.tagsDict.includes(tag))){
			this.setState({
				tagsDict: this.state.tagsDict.concat(tag)
			})
		}
	}
	
	handleEnter = (event) => {
        if(event.code === "Enter"){
            if(this.state.newMail === "" || this.state.studentsList.some(student => student.mail === this.state.newMail)){
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
				tagsArr.forEach(this.addToDict,this);
				this.state.tagsDict.sort();
				console.log(this.state.tagsDict);
				this.setState({
                    studentsList: this.state.studentsList.concat(newStudent),
                    newName: "",
					newMail: "",
					newDesc: "",
					newTags: "",
                    showWarning: false

                })
            }
        } else {
            this.setState({
                showWarning: false
            })
        }
    }
	
	render() {
        const myList = this.state.studentsList.map(st => (
            <Student name={st.name} desc={st.desc} mail={st.mail} tags={st.tags} key={hashCode(st.mail)} />
        ))

        return (
            <>
                <h1>Lista studentów</h1>
				<div className="new-student-form">
				<h3>Nowy student</h3>
                <Box
					id="name"
					label="Imię i nazwisko: "
                    newItemValue={this.state.newName}
                    handleOnChange={this.handleNewName}
                    handleOnKey={this.handleEnter}
                />
				<Box
					id="desc"
					label="Opis: "
                    newItemValue={this.state.newDesc}
                    handleOnChange={this.handleNewDesc}
                    handleOnKey={this.handleEnter}
                />
				<Box
					id="mail"
					label="Adres e-mail: "
                    newItemValue={this.state.newMail}
                    handleOnChange={this.handleNewMail}
                    handleOnKey={this.handleEnter}
                />
				<Box
					id="tags"
					label="Tagi (rozdzielone przecinkiem i spacją): "
                    newItemValue={this.state.newTags}
                    handleOnChange={this.handleNewTags}
                    handleOnKey={this.handleEnter}
                />
				{this.state.showWarning && <h1 className="err">{this.errorMessage}</h1> }
				</div>
               
                
                    {myList}
                
            </>
        );
    }
}

ReactDOM.render(
    <StudentsList/>,
    document.getElementById('root')
);
