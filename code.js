"use strict"

const evaluate = () => {
    let value = document.getElementById("task").value;
    if(value === "") {
        console.log("A jest puste");
        return
    }
    return value;
}

let previous;
let previousList;
let removed;

const add = () => {
    const tempVar =  evaluate();
    let a;
    if (tempVar) {
        a = tempVar;
    }else
        return


    //debugger
    console.log(a);
    const newP = document.createElement("p");
	const task = document.createElement("div");
    task.innerHTML = `${a}`;
    task.classList = "btn btn-warning";
	task.addEventListener("click", function(){
		if(task.classList.toggle("btn-warning")){
			task.parentElement.childNodes[2].innerHTML = "";
		}
		if(task.classList.toggle("btn-dark")){
			task.parentElement.childNodes[2].innerHTML = new Date().toLocaleDateString();
		}
		
	});
	const del = document.createElement("div");
	del.innerHTML = `&times;`;
	del.classList = "btn btn-delete";
	del.addEventListener("click", function(){
		$("#myModal").modal();
		previous = $(this).parent();
		previousList = $(this).parent().parent().attr("id");
	});
	const date = document.createElement("div");
	newP.appendChild(task);
	newP.appendChild(del);
	newP.appendChild(date);
	let lista = document.getElementsByName("list");
	if(lista[0].checked === true)
		document.getElementById("list1").appendChild(newP);
	else
		document.getElementById("list2").appendChild(newP);
}

const displaynt = (index) =>{
	let lista = document.getElementById("list"+index);
	let elements = lista.getElementsByTagName("p");
	for (let i = 0; i < elements.length; ++i){
		elements[i].classList.toggle("displaynt");
	}
}

function remove () {
	removed = previous;
	previous.remove();
	$("#cofnij").removeClass("displaynt");
}

function cofnij () {
	$("#cofnij").addClass("displaynt");
	$("#"+previousList).append(removed);
}

function filter(){
	let text = document.getElementById("search").value;
	let elements1 = document.getElementById("list1").getElementsByTagName("p");
	let elements2 = document.getElementById("list2").getElementsByTagName("p");
	let sens = document.getElementById("case").checked;
	for (let i=0; i<elements1.length; ++i) {
		let e = elements1[i];
		//console.log(e);
		//console.log(e.childNodes);
		let task = e.childNodes[0].outerText;
		//console.log(task);
		if(contains(task, text, sens))
			e.classList.remove("displaynt");
		else
			e.classList.add("displaynt");
	}
	for (let i=0; i<elements2.length; ++i) {
		let e = elements2[i];
		let task = e.childNodes[0].outerText;
		if(contains(task, text, sens))
			e.classList.remove("displaynt");
		else
			e.classList.add("displaynt");
	}
}

function contains(str1, str2, sens){
	if(sens===false)
		return str1.includes(str2);
	else
		return str1.toLowerCase().includes(str2.toLowerCase());
}
