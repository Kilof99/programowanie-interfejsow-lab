import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUTNxpnYD6XyugJEizWy6RNcmqQFf0tzU",
    authDomain: "lab6-db43c.firebaseapp.com",
    projectId: "lab6-db43c",
    storageBucket: "lab6-db43c.appspot.com",
    messagingSenderId: "269229643135",
    appId: "1:269229643135:web:757dfdcda6e2601228364a",
    measurementId: "G-913X2F1YWP"
  };

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app()
}

export const auth=firebase.auth()
export const firestore=firebase.firestore()

export const dbAdd = (id, name, desc, mail, tags) => {
    firestore.collection("students").add({
        id: id,
        name: name,
        desc: desc,
        mail: mail,
        tags: tags
    })
}

export const dbGet = () => {
    var list = [];

    firestore.collection("students").onSnapshot((snapshot) => {
        snapshot.forEach((doc) =>{
            const newListElement = {
                id: doc.data()['id'],
                name: doc.data()['name'],
                desc: doc.data()['desc'],
                mail: doc.data()['mail'],
                tags: doc.data()['tags'],
            }
            list.push(newListElement)   
        }) 
    })

    
    return list
}
