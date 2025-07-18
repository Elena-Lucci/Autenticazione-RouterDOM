import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
    useEffect(() => {localStorage.setItem("users", JSON.stringify(users))}, [users]);
    const [message, setMessage] = useState("");

    function registrazione(formData){
        setMessage("");
        const userExists = users.find((x) => x.email === formData.email);
        if(!userExists){
            setMessage("Utente registrato con successo");
            setUsers((prev) => [...prev, formData]);
        } else {
            setMessage("Utente già registrato");
        }
    }

    function login(email, password) {
        setMessage("");
        const userExists = users.find((x) => x. email === email && x.password === password);
        if(!userExists) {
            setMessage("Credenziali errate");} else {
                setUser(userExists);
                localStorage.setItem("user", JSON.stringify(userExists));
            }
    }

    function logout() {
        setMessage("");
        setUser(null);
        localStorage.removeItem("user");
        setMessage("Logout effettuato con successo");
        navigate("/");
    }

return(
    <>
        <AuthContext.Provider value={{user, login, logout, registrazione, message, users }}>{children}</AuthContext.Provider>
    </>
)
}

