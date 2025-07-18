import { useState } from "react";
import { useAuth } from '../Context/AuthContext';
import { Link } from "react-router-dom";

function Login(){
    const {login, message} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
        setEmail('');
        setPassword('');
    } 



    return(
       <div>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value) } placeholder="Inserisci la tua email" required />

            <label>Password</label>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Inserisci la tua password" required />

            <button type="submit">Login</button>
            <p>Non sei registrato? <Link to={'/registrazione'}>Registrati</Link> </p>
            {message && <p>{message}</p>}
        </form>
       </div>
    );
}

export default Login;