import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Home from './pages/Home/Home.jsx'
import Exhaust from './pages/Exhaust/Exhaust.jsx'
import Fuel from './pages/Fuel/Fuel.jsx'
import Cooling from './pages/Cooling/Cooling.jsx'
import Rpm from './pages/Rpm/Rpm.jsx'
import Servo from './pages/Servo/Servo.jsx'
import All from './pages/All/All'

function App() {
  return (
    <div className='main-container'>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exhaust' element={<Exhaust />} />
          <Route path='/fuel' element={<Fuel />} />
          <Route path='/cooling' element={<Cooling />} />
          <Route path='/rpm' element={<Rpm />} />
          <Route path='/servo' element={<Servo />} />
          <Route path='/all' element={<All />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </div>
  );
}

export default App;
