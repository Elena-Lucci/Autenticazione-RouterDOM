import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function registrazione(formData) {
    setMessage("");
    const userExists = users.find((x) => x.email === formData.email);
    if (!userExists) {
      setMessage("Utente registrato con successo");
      setUsers((prev) => [...prev, formData]);
      navigate("/login");
    } else {
      setMessage("Utente già registrato");
    }
  }

  function login(email, password) {
    setMessage("");
    const userExists = users.find(
      (x) => x.email === email && x.password === password
    );
    if (!userExists) {
      setMessage("Credenziali errate");
    } else {
      setUser(userExists);
      localStorage.setItem("user", JSON.stringify(userExists));
      navigate("/dashboard");
    }
  }

  function logout() {
    setMessage("");
    setUser(null);
    localStorage.removeItem("user");
    setMessage("Logout effettuato con successo");
  }

  return (
    <>
      <AuthContext.Provider
        value={{ user, login, logout, registrazione, message, users }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}
