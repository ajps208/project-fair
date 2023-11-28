import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
import Auth from './Components/Auth';
import { useContext } from 'react';
import { tokenAuthorisationContext } from './Context.js/TokenAuth';

function App() {
  const{isAuthorizes, setIsAuthorizes}=useContext(tokenAuthorisationContext)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth />}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/dashboard' element={isAuthorizes?<Dashboard />:<Home/>}/>
        <Route path='/projects' element={isAuthorizes?<Projects/>:<Home/>}/>
        <Route path='/*' element={<Home/>}/>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
