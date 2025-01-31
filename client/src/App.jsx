import React, { StrictMode, useState, useEffect } from 'react'; // Import StrictMode
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomeLayout from './pages/home/HomeLayout';
import HomePage from './pages/home/HomePage';
import Loader from './components/common/loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <StrictMode> {/* Now properly imported */}
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </StrictMode>
  );
}

export default App;