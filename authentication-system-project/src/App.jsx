import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/registrazione" element = {<Registrazione/>}></Route>
        <Route path="/dashboard" element = {<Dashboard/>}></Route>
      </Routes>
    </>
  )
}

export default App
