import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import CreatorDetail from './pages/CreatorDetail.jsx'
import Login from './pages/Login.jsx'

import NotFound from './pages/NotFound.jsx'
import Dashboard from './admin/Dashboard.jsx'
import User from './admin/User.jsx'
import Creator from './admin/Creator.jsx'
import Booking from './admin/Booking.jsx'
import Review from './admin/Review.jsx'
import Register from './pages/Register.jsx'
import Navbar from './components/navigation/Navbar.jsx'
import AdminLayout from './admin/AdminLayout.jsx';
import MyBookings from './pages/MyBookings.jsx';
import BookingDetails from './pages/BookingDetails.jsx';
import PrivateRoute from './hooks/PrivateRoute';


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
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<PrivateRoute/>}>
         <Route path="my-bookings" element={<MyBookings />} />
        <Route path="my-bookings/:id" element={<BookingDetails />} />
      </Route>
<Route path='/admin' element={<AdminLayout/>}  >
      <Route index element={<Dashboard />} />
      <Route path="user" element={<User />} />
      <Route path="creator" element={<Creator />} />
      <Route path="booking" element={<Booking/> } />
      <Route path="review" element={<Review/> } />
</Route>


      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
   
    <ToastContainer/>
    </BrowserRouter>
  )
}

export default App