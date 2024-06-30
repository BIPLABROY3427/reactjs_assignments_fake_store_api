import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import Details from './Pages/Details';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="product/:id" element={<Details />} />
            <Route path="search" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
