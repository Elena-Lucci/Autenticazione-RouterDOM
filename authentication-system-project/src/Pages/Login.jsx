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
       <div className="shadow-lg p-4 rounded-lg">
        <form className="flex flex-col gap-[20px] justify-center " onSubmit={handleSubmit}>
            <label className="text-left">Email</label>
            <input className={email?" shadow-lg rounded-xl p-1.5":"shadow-lg rounded-xl p-1.5 shadow-red-500"} type="email" value={email} onChange={(e)=> setEmail(e.target.value) } placeholder="Inserisci la tua email" required />

            <label className="text-left">Password</label>
            <input  className="shadow-lg rounded-xl p-1.5" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Inserisci la tua password" required />

            <button className="py-2 px-4 bg-[#016450] text-[var(--bg-color)] rounded-xl" type="submit">Login</button>
            <p>Non sei registrato? <Link to={'/registrazione'}>Registrati</Link> </p>
            {message && <p>{message}</p>}
        </form>
       </div>
    );
}

export default Login;