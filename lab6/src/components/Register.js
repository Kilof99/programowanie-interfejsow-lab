import {Redirect} from "react-router-dom";
import { auth } from "../firebase";
import {useState} from "react";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [warning1, setWarning1] = useState(false);
    const errorMessage1 = "Niepoprawny adres e-mail";
    const [warning2, setWarning2] = useState(false);
    const errorMessage2 = "Hasło musi mieć co najmniej 6 znaków";

    const createUserWithEmailAndPasswordHandler = () => {
        setWarning1(false);
        setWarning2(false);
        auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            auth.signInWithEmailAndPassword(email, password)
            .then(loggedUser => {
                loggedUser.user.updateProfile({
                    displayName: displayName
                })
            })
            .catch(error => {
                console.log(error);
            })
            setRedirect(true);
        })
        .catch(error => {
            console.log(error);
            if(error.code==="auth/invalid-email")
                setWarning1(true);
            if(error.code==="auth/weak-password")
                setWarning2(true);
        })
    };

    if (redirect)
        return <Redirect to="/" />

    return (
        <div>
            <label htmlFor="displayName"> Nazwa użytkownika</label>
            <div>
                <input
                    name = "name"
                    value = {displayName}
                    placeholder="Nazwa użytkownika"
                    onChange={e => setDisplayName(e.target.value)}
                />
            </div>

            <label htmlFor="email"> Adres e-mail</label>
            <div>
                <input
                    name="email"
                    value={email}
                    placeholder="Adres e-mail"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <label htmlFor="password"> Hasło</label>
            <div>
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Haslo"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button
                onClick={createUserWithEmailAndPasswordHandler}
            >
                Utwórz konto
            </button>
            <div>
                {warning1 && <h1 className="err">{errorMessage1}</h1>} 
                {warning2 && <h1 className="err">{errorMessage2}</h1>}
            </div>
        </div>
    )
}

export default Register;