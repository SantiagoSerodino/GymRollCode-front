import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import ErrorScreen from './pages/ErrorScreen/ErrorScreen';
import Footer from './Components/generals/footer/Footer'
import Navbar from './Components/generals/Navbar/Navbar';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Planes from './pages/planes/Planes';
import Login from './pages/Login'
import './App.css';
import AdminRouter from './pages/Admin/AdminRouter';

function App() {
  return (
    
    <>
      <BrowserRouter> 
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/error' element={<ErrorScreen/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/planes' element={<Planes/>} />
          <Route path='/contactanos' element={<ContactUs/>} />
          <Route path='/admin/*' element={<AdminRouter/>}/>
          
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
