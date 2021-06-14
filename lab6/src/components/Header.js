import { NavLink, Link } from "react-router-dom";
import {auth} from "../firebase"
import { useState, useEffect } from "react";
import '../App.css';

const Header = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((u) => {
            if (u) {
                setUser(u);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }
    , []);

    const logout = () =>{
        auth.signOut()
    }

    if (user)
        return (
            <header>
                <h1>Lista studentów</h1>
                <nav>
                    <NavLink to="/">Lista studentów</NavLink>
                    <NavLink to="/new">Dodaj studenta</NavLink>
                    <NavLink to="/login" onClick={logout}>Wyloguj się</NavLink>
                </nav>
                
            </header>
        )
    return (
        <header>
            <h1>Lista studentów</h1>
            <nav>
                <NavLink to="/login" exact>Zaloguj się</NavLink>
                <NavLink to="/signup">Załóż konto</NavLink>
            </nav>
            
        </header>
    )
}
export default Header;