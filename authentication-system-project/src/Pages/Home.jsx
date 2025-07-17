import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

// ### 🏠 Home (`/`) (ELENA)

// - Mostra due pulsanti se l'utente **non è autenticato**:  
//   `➡️ Accedi` e `📝 Registrati`
// - Se l'utente **è autenticato**, mostra un messaggio di benvenuto e un pulsante `Vai alla dashboard`

// ---

function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {!user ? (
        <div>
          <Link to="/login">
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full">Accedi</button>
          </Link>
          <Link to="/registrazione">
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full">Registrati</button>
          </Link>
        </div>
      ) : (
        <div>
          <h1>
            Benvenuto, {user.name}!
          </h1>
          <Link to="/dashboard">
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full"> Vai alla dashboard</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;