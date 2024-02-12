import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Profile from './Pages/Profile'
import Navbar from './Pages/Navbar'
import { AppContext } from './Providers/AppContext'
import { useState } from 'react'

const App = () => {
  const [userName, setUserName] = useState('')
  return (
    <AppContext.Provider value={{userName, setUserName}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile/:name' element={<Profile />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  )
}

export default App