import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import Login from './pages/loginPage';

function App() {

  return (
    
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
