/*### 📝 Registrazione (`/register`)

- Form con i seguenti campi obbligatori:
  - Nome
  - Cognome
  - Email
  - Password
  - Conferma Password
  - Età (minimo 18 anni!)
  - Città
  - Professione
- Tutti i campi devono avere una **validazione client-side**
- Se la registrazione ha successo, reindirizza alla pagina di login*/

import { useState } from "react";
import { useAuth } from "../Context/AuthContext";

function Registrazione() {
  const [error, setError] = useState("");
  const { registrazione } = useAuth(); //contesto
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
    confermaPassword: "",
    eta: "",
    citta: "",
    professione: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleRegistrazione(e) {
    setError(""); //reset del messaggio d'errore
    e.preventDefault();
    if (formData.password !== formData.confermaPassword) {
      setError("Le password non coincidono");
      return; //fermo la registrazione
    }
    registrazione(formData);
    setFormData({
      nome: "",
      cognome: "",
      email: "",
      password: "",
      confermaPassword: "",
      eta: "",
      citta: "",
      professione: "",
    }); // Reset dopo aver premuto il button
  }
  return (
    <>
      <form onSubmit={handleRegistrazione}>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          onChange={handleChange}
          required
          placeholder="Inserire il tuo nome"
          minlength="2"
          pattern="[A-Za-zÀ-ÿ\s]{2,}"
          title="Inserire almeno 2 lettere. Sono ammessi solo caratteri alfabetici e spazi."
        />
        <label>Cognome</label>
        <input
          type="text"
          name="cognome"
          onChange={handleChange}
          required
          placeholder="Inserire il tuo cognome"
          minlength="2"
          pattern="[A-Za-zÀ-ÿ\s]{2,}"
          title="Inserire almeno 2 lettere. Sono ammessi solo caratteri alfabetici e spazi."
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          required
          placeholder="Inserire la tua email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Inserire una email valida"
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          required
          placeholder="Inserire password"
          minlength="8"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Deve contenere almeno: un numero, una lettera maiuscola ed una minuscola e deve essere di minimo 8 caratteri"
        />
        <label>Conferma Password</label>
        <input
          type="password"
          name="confermaPassword"
          onChange={handleChange}
          required
        />
        <label>Eta</label>
        <input
          type="number"
          name="eta"
          onChange={handleChange}
          required
          min="18"
          max="121"
        />
        <label>Citta'</label>
        <input type="text" name="citta" onChange={handleChange} required />
        <label>Professione</label>
        <select name="professione" required onChange={handleChange}>
          <option value="Impiegato">Impiegato</option>
          <option value="Libero Professionista">Libero Professionista</option>
          <option value="Ditta individuale">Ditta individuale</option>
          <option value="Lavoratore Occasionale">Lavoratore Occasionale</option>
        </select>
        <button>Submit</button>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </form>
    </>
  );
}

export default Registrazione;
