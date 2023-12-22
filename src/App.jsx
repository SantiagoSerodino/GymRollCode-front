import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import ErrorScreen from './pages/ErrorScreen/ErrorScreen';
import Footer from './Components/generals/footer/Footer'
import Navbar from './Components/generals/Navbar/Navbar';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login'
import './App.css';
import AdminRouter from './pages/Admin/AdminRouter/AdminRouter';
import PlanMusculacion from './Components/generals/PlanCard/Planes/PlanMusculacion';
import PlanClases from './Components/generals/PlanCard/Planes/PlanClases';
import PlanFull from './Components/generals/PlanCard/Planes/PlanFull';
import { useEffect, useState } from 'react';

function App() {

  //Declaramos cambio de estado para user que se usara como props para usarlos en ciertos componentes
  const [user,setUser] = useState();
    const admin = user?.logedUser?.userWhitoutPassword?.admin;
  //Accedemos al localStorage y seteamos user
  useEffect (()=>{
    setUser(JSON.parse(localStorage.getItem('user')))
  },[])

  return (
    
    <>
      <BrowserRouter> 
      <Navbar user={user}/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login setUser={setUser}/>} />
          <Route path='/error' element={<ErrorScreen/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contactanos' element={<ContactUs/>} />
          <Route path='/admin/*' element={admin? <AdminRouter user={user}/> : (admin==false && <Navigate to="/error" replace />)}/>
          <Route path='/musculacion' element={<PlanMusculacion/>} />
          <Route path='/clases' element={<PlanClases/>} />
          <Route path='/full' element={<PlanFull/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
