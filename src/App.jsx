import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agence from './pages/Agence'
import Stairs from './components/common/Stairs'


const App = () => {

  // console.log(props)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agence' element={<Agence/>} />
        <Route path='/Projects' element={<Projects/>} />
      </Routes>
    </div>
    
  )
}

export default App