import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import ErrorScreen from './pages/ErrorScreen/ErrorScreen';
import Footer from './components/footer/Footer'
import './App.css';
import Navbar from './Components/generals/Navbar/Navbar';
import Login from './pages/Login';

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
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
