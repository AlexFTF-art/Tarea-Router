import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  return (
    
    <BrowserRouter>

      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login'  element={<Login />}/>

        <Route path='/dashboard'  element={<Dashboard />}>
          <Route index element={<p>Dashboard</p>}/>
          <Route path='profile'  element={<Profile />}/>
          <Route path='settings'  element={<Settings />}/>
        </Route>

        <Route path='*'  element={<h2>Pagina no encontrada</h2>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
