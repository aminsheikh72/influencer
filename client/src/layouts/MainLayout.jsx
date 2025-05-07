// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navigation/Navbar.jsx'
import Footer from '../components/navigation/Footer.jsx'
import React from 'react'
// import NotificationDropdown from '../components/dropdowns/NotificationDropdown.jsx'
// import MessageDropdown from '../components/dropdowns/MessageDropdown.jsx'

const MainLayout = () => {
  // const [showNotifications, setShowNotifications] = useState(false)
  // const [showMessages, setShowMessages] = useState(false)

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications)
    if (showMessages) setShowMessages(false)
  }

  const toggleMessages = () => {
    setShowMessages(!showMessages)
    if (showNotifications) setShowNotifications(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="relative">
        <Navbar
          onNotificationClick={toggleNotifications}
          onMessageClick={toggleMessages}
        />

      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout