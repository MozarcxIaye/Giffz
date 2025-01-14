import { StrictMode, useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import HomeLayout from './pages/home/HomeLayout'
import HomePage from './pages/home/HomePage'

function App() {

  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            {/* Homepage */}
            <Route path='/' element={<HomeLayout />}>
              <Route path='/' element={<HomePage/>}></Route>
            </Route>
          </Routes>


        </BrowserRouter>
      </StrictMode>
    </>
  )
}

export default App
