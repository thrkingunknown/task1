import './App.css'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Addmovie from './components/Addmovie.jsx'
import Welcome from './components/Welcome.jsx'
import Viewmovie from './components/Viewmovie.jsx'


function App() {

  return (
    <>
    <Navbar />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/addmovie" element={<Addmovie />} />
            <Route path="/viewmovie" element={<Viewmovie />} />
          </Routes>
    </>
  )
}

export default App
