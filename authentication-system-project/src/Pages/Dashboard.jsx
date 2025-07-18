/*### 🧑💼 Dashboard (`/dashboard`)

- Accessibile **solo se loggati**
- Mostra i dati dell'utente loggato (es. nome, email, città, professione)
- Include un pulsante `Logout` che:
  - Cancella i dati dell'utente
  - Reindirizza alla Home
  */

import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

function Dashboard() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      //Se non si è loggati, si viene renderizzati alla pagina Home (/)
      navigate("/");
    }
  }, [user]);

  return (
    // Dati dell'utente
    <div>
      <h1>Dashboard</h1>
      <p>Nome:{user.nome}</p>
      <br />
      <p>Email:{user.email}</p>
      <br />
      <p>Città:{user.citta}</p>
      <br />
      <p>Professione:{user.professione}</p>
      <br />
      <button onClick={logout}>Logout</button>
      {/*Quando viene cliccato il pulsante logout, viene eseguita la funzione di logout da AuthContext.jsx*/}
    </div>
  );
}

export default Dashboard;
