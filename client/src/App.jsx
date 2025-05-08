import { BrowserRouter,Routes, Route } from 'react-router-dom'
import React from 'react'

// Layout
import MainLayout from './layouts/MainLayout.jsx'

// Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import CreatorDetail from './pages/CreatorDetail.jsx'
import Login from './pages/Login.jsx'

import Gallery from './pages/Gallery.jsx'
import NotFound from './pages/NotFound.jsx'
import Register from './pages/Register.jsx'

function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="creators/:id" element={<CreatorDetail />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    
    </Routes>
    </BrowserRouter>
  )
}

export default App