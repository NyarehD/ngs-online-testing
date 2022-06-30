import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from '../../app/pages/home/home'
import About from '../../app/pages/about/about'
import Error from '../../app/pages/error/error'

function View() {
  return (
    <Routes>
        <Route index element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='*' element={<Error />}></Route>
    </Routes>
  )
}

export default View