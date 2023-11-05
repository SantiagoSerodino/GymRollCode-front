import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import ErrorScreen from './pages/ErrorScreen/ErrorScreen';
import Footer from './components/footer/Footer'
import './App.css';
import Navbar from './Components/generals/Navbar/Navbar';
import About from './pages/About/About';

function App() {
  return (
    <>
      <BrowserRouter> 
      {/* <Navbar/> */}
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/error' element={<ErrorScreen/>} />
          <Route path='/about' element={<About/>} />
      </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
