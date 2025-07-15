import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../features/user/userSlice';
import { Link } from 'react-router-dom';

const User = () => {
  const { users } = useSelector(state => state.user)
  const dispatch = useDispatch()
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      
        const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <div
      className="font-sans min-h-screen overflow-x-hidden"
      style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
    >
      <div className="flex flex-col md:flex-row md:mt-10 overflow-hidden">
           <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
              <div className="flex items-center justify-between h-16 px-4">
                <Link to={'/'} className="text-xl font-bold text-[#FF003C]">HOME</Link>
                <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
                  <div className={`${mobileMenuOpen ? 'block' : 'hidden'} px-2 pt-2 pb-3 space-y-1 bg-gray-900`}>
                        <Link to="/admin" className="block px-3 py-2 rounded-md text-gray-300 bg-gray-800 hover:text-white">Dashboard</Link>
                        <Link to="/admin/user" className="block px-3 py-2 rounded-md text-gray-300 bg-gray-800 hover:text-white">Users</Link>
                        <Link to="/admin/creator" className="block px-3 py-2 rounded-md text-white bg-gray-800">Creators</Link>
                        <Link to="/admin/review" className="block px-3 py-2 rounded-md text-gray-300 bg-gray-800 hover:text-white">Reviews</Link>
                        <Link to="/admin/booking" className="block px-3 py-2 rounded-md text-gray-300 bg-gray-800 hover:text-white">Bookings</Link>
                      </div>
            </div>
        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="flex-1 relative overflow-y-auto pt-16 md:pt-0 md:ml-64 ml-0 px-4">
            <div className="py-6">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl font-bold text-white">Users</h1>
                </div>
              </div>

              <div className="max-w-7xl mx-auto">
                {/* User Cards */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {users?.map((user, i) => (
                    <div
                      key={user._id || i}
                      className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300"
                    >
                      <div className="p-6">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 rounded-full border-2 border-[#FF003C] object-cover"
                            src={user.avatar || "https://randomuser.me/api/portraits/lego/1.jpg"}
                            alt="User"
                          />
                          <div className="ml-4">
                            <h3 className="text-lg font-bold text-white break-words">{user.name}</h3>
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Email:</span>
                            <span className="text-white break-all text-right">{user.email}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Phone:</span>
                            <span className="text-white break-all text-right">{user.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <style jsx>{`
        .card-gradient {
          background: linear-gradient(145deg, rgba(40, 40, 40, 0.6), rgba(20, 20, 20, 0.8));
        }
      `}</style>
    </div>
  );
};

export default User;
