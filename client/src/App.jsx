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

import Dashboard from './admin/Dashboard.jsx'
import User from './admin/User.jsx'
import Creator from './admin/Creator.jsx'
import Booking from './admin/Booking.jsx'
import Review from './admin/Review.jsx'

import Register from './pages/Register.jsx'
import Navbar from './components/navigation/Navbar.jsx'
import Footer from './components/navigation/Footer.jsx'


function App() {
  return (
<BrowserRouter>
<Navbar/>
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
    
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/user" element={<User />} />
      <Route path="/admin/creator" element={<Creator />} />
      <Route path="/admin/booking" element={<Booking/> } />
      <Route path="/admin/review" element={<Review/> } />
    


      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App