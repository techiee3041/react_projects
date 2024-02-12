import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Auth from './pages/auth'
import Home from './pages/home'
import Movie from './pages/movie'
import TvShow from './pages/tvshow'

function App() {

  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/rated' element={<h1>rated</h1>} />
          <Route path='/movies/:id' element={<Movie />} />
          <Route path='/tvshow/:id' element={<TvShow />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
