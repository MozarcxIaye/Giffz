import { StrictMode, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import HomeLayout from './pages/home/HomeLayout'
import HomePage from './pages/home/HomePage'
// import ErrorPage from './components/common/Error/ErrorPage'

function App() {

  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            {/* Homepage */}
            <Route path='/' element={<HomeLayout />}>
              <Route path='/' element={<HomePage />}></Route>
            </Route>

            {/* Error Page */}
            {/* <Route path="*" element={<ErrorPage />} /> */}

          </Routes>


        </BrowserRouter>
      </StrictMode>
    </>
  )
}

export default App
