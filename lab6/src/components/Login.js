import { auth } from "../firebase";

import {useState} from "react";
import {Redirect} from "react-router-dom";
import "../App.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [warning, setWarning] = useState(false);
    const errorMessage = "Błędny login lub hasło";

    const login = () => {

        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            setRedirect(true);
        })
        .catch(error => {
            console.log(error);
            setWarning(true);
        })
    }

    if(redirect)
        return <Redirect to="/" />

    return (
        <div>
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
            

            <button onClick={login}>Zaloguj się</button>
            <div>
                {warning && <h1 className="err">{errorMessage}</h1> }
            </div>
        </div>
    )
}

export default Login;