
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import DashBoard from './pages/Dashboard';
import MateriiPrime from './pages/MateriiPrime';
import Semifabricate1 from './pages/Semifabricate1';
import Semifabricate2 from './pages/Semifabricate2';
import ProduseFinite from './pages/ProduseFinite';
import Angajati from './pages/Angajati';
import Rezultate from './pages/Rezultate';

function App() {
  return (<Router>
    <Routes>
      <Route path='/rezultate' element={<Rezultate />} />
      <Route path='/angajati' element={<Angajati />} />
      <Route path='/produseFinite' element={<ProduseFinite />} />
      <Route path='/materiiprime' element={<MateriiPrime />} />
      <Route path='/semifabricate1' element={<Semifabricate1 />} />
      <Route path='/semifabricate2' element={<Semifabricate2 />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<DashBoard />} />

    </Routes>
  </Router>
  );
}

export default App;
