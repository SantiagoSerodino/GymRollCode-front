import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import ErrorScreen from './pages/ErrorScreen/ErrorScreen';

function App() {

  return (
    
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/error' element={<ErrorScreen/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
