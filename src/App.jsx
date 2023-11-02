import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import ErrorScreen from './pages/ErrorScreen/ErrorScreen';
import Footer from './components/footer/Footer'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter> 
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/error' element={<ErrorScreen/>} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
