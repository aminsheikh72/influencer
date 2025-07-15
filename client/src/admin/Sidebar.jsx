import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const linkClass =
    'flex items-center px-4 py-3 rounded-md transition-colors duration-200'
  const activeClass = 'bg-gray-800 text-white'


  return (
    <>
    <div className="hidden md:flex mt-20 fixed left-0 top-0 h-full w-64 z-50 bg-black">
      <div className="flex flex-col w-64 border-r border-gray-800">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
            <h1 className="text-xl font-bold text-[#FF003C]">ADMIN PANEL</h1>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-2">
              <NavLink
                to="/admin"
                end
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : 'text-gray-300 hover:bg-gray-800'}`
                }
              >
                🏠 Dashboard
              </NavLink>

              <NavLink
                to="/admin/user"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : 'text-gray-300 hover:bg-gray-800'}`
                }
              >
                👤 Users
              </NavLink>

              <NavLink
                to="/admin/creator"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : 'text-gray-300 hover:bg-gray-800'}`
                }
              >
                📸 Creators
              </NavLink>

              <NavLink
                to="/admin/review"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : 'text-gray-300 hover:bg-gray-800'}`
                }
              >
                ⭐ Reviews
              </NavLink>

              <NavLink
                to="/admin/booking"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : 'text-gray-300 hover:bg-gray-800'}`
                }
              >
                📅 Bookings
              </NavLink>

              
            </nav>
          </div>
        </div>
      </div>
    </div>



    </>
  )
}

export default Sidebar
