import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import Login from './pages/loginPage';
import ErrorScreen from './pages/ErrorScreen/ErrorScreen';

function App() {

  return (
    
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/error' element={<ErrorScreen/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
