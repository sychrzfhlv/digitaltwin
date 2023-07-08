import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Home from './pages/Home/Home.jsx'
import Exhaust from './pages/Exhaust/Exhaust.jsx'
import Fuel from './pages/Fuel/Fuel.jsx'
import Cooling from './pages/Cooling/Cooling.jsx'
import Rpm from './pages/Rpm/Rpm.jsx'
import Servo from './pages/Servo/Servo.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Details from './pages/Details/Details'
import About from './pages/About/About'

function App() {
  return (
    <div className='main-container'>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='details' element={<Details />} />
          <Route path='about' element={<About />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </div>
  );
}

export default App;
