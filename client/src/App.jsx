import { Routes, Route } from 'react-router-dom'
import React from 'react'

// Layout
import MainLayout from './layouts/MainLayout.jsx'

// Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import CreatorDetail from './pages/CreatorDetail.jsx'
import Gallery from './pages/Gallery.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="creators/:id" element={<CreatorDetail />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/auth/:type" element={<Auth />} />
    
    </Routes>
  )
}

export default App