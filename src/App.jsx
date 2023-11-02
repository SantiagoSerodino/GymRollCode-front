import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorScreen from './pages/ErrorScreen/ErrorScreen';
import Footer from './components/footer/Footer'
import './App.css';
import Navbar from './Components/generals/Navbar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter> 
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/error' element={<ErrorScreen/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
