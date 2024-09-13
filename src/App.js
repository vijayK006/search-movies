import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Details from './Pages/Details'

const App = () => {
  return (
    <>
 <BrowserRouter>
  <Routes>
<Route path='/' element={<Home/>} />
<Route path='/movie-details/:id' element={<Details/>} />
  </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
