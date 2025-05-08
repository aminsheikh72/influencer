import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const User = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    }


    return (
        <div className="font-sans" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
          <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            {/* <div className="hidden md:flex md:flex-shrink-0">
              <div className="flex flex-col w-64 border-r border-gray-800">
                <div className="flex flex-col h-0 flex-1">
                  <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
                    <h1 className="text-xl font-bold text-[#FF003C]">ADMIN PANEL</h1>
                  </div>
                  <div className="flex-1 flex flex-col overflow-y-auto">
                    <nav className="flex-1 px-2 py-4 space-y-2">
                      <a href="dashboard.jsx" className="flex items-center px-4 py-3 text-gray-300 rounded-md hover:bg-gray-800 group transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#FF003C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Dashboard
                      </a>
                      <a href="users.jsx" className="flex items-center px-4 py-3 text-white bg-gray-800 rounded-md group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#FF003C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        Users
                      </a>
                      <a href="creators.jsx" className="flex items-center px-4 py-3 text-gray-300 rounded-md hover:bg-gray-800 group transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#FF003C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Creators
                      </a>
                      <a href="reviews.jsx" className="flex items-center px-4 py-3 text-gray-300 rounded-md hover:bg-gray-800 group transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#FF003C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Reviews
                      </a>
                      <div className="pt-8">
                        <button className="w-full flex items-center px-4 py-3 text-gray-300 rounded-md hover:bg-gray-800 group transition-colors duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#FF003C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Sign Out
                        </button>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div> */}
             <div className="hidden md:flex md:flex-shrink-0">
              <div className="flex flex-col w-64 border-r border-gray-800">
                <div className="flex flex-col h-0 flex-1">
                  <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
                    <h1 className="text-xl font-bold text-[#FF003C]">ADMIN PANEL</h1>
                  </div>
                  <div className="flex-1 flex flex-col overflow-y-auto">
                    <nav className="flex-1 px-2 py-4 space-y-2">
                      <Link to={'/admin'}  className="flex items-center px-4 py-3 text-white. hover:bg-gray-800 rounded-md group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#FF003C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Dashboard
                      </Link>
                      <Link to={'/admin/user'} className="flex items-center px-4 py-3 text-gray-300 rounded-md bg-gray-800 group transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#FF003C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        Users
                      </Link>
                      <Link to={'/admin/creator'} className="flex items-center px-4 py-3 text-gray-300 rounded-md hover:bg-gray-800 group transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#FF003C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Creators
                      </Link>
                      <Link to={'/admin/review'} className="flex items-center px-4 py-3 text-gray-300 rounded-md hover:bg-gray-800 group transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#FF003C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Reviews
                      </Link> 
                       <Link to={'/admin/booking'} className="flex items-center px-4 py-3 text-gray-300 rounded-md hover:bg-gray-800 group transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#FF003C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        Bookings
                      </Link>
                      <div className="pt-8">
                        <button className="w-full flex items-center px-4 py-3 text-gray-300 rounded-md hover:bg-gray-800 group transition-colors duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#FF003C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Sign Out
                        </button>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
              <div className="flex items-center justify-between h-16 px-4">
                <h1 className="text-xl font-bold text-[#FF003C]">ADMIN PANEL</h1>
                <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <div className={`${mobileMenuOpen ? 'block' : 'hidden'} px-2 pt-2 pb-3 space-y-1 bg-gray-900`}>
                <a href="dashboard.jsx" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white">Dashboard</a>
                <a href="users.jsx" className="block px-3 py-2 rounded-md text-white bg-gray-800">Users</a>
                <a href="creators.jsx" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white">Creators</a>
                <a href="reviews.jsx" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white">Reviews</a>
                <button className="w-full text-left block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white">Sign Out</button>
              </div>
            </div>
    
            {/* Main content */}
            <div className="flex flex-col flex-1 overflow-hidden">
              <main className="flex-1 relative overflow-y-auto focus:outline-none pt-16 md:pt-0">
                <div className="py-6">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="flex justify-between items-center">
                      <h1 className="text-3xl font-bold text-white">Users</h1>
                      <div className="flex space-x-3">
                        <div className="relative">
                          <input type="text" placeholder="Search users..." className="bg-gray-800 text-white rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#FF003C]" />
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <button className="bg-[#FF003C] hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 hover:shadow-[0_0_15px_rgba(255,0,60,0.7)]">
                          Add User
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    {/* User Cards */}
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {/* User Card 1 */}
                      <div className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                        <div className="p-6">
                          <div className="flex items-center">
                            <img className="h-16 w-16 rounded-full border-2 border-[#FF003C]" src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" />
                            <div className="ml-4">
                              <h3 className="text-lg font-bold text-white">John Smith</h3>
                              <p className="text-sm text-gray-400">Premium User</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Email:</span>
                              <span className="text-white">john.smith@example.com</span>
                            </div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Joined:</span>
                              <span className="text-white">Jan 15, 2023</span>
                            </div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Status:</span>
                              <span className="text-green-500">Active</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">NFTs Owned:</span>
                              <span className="text-white">24</span>
                            </div>
                          </div>
                          <div className="mt-6 flex space-x-3">
                            <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Edit
                            </button>
                            <button className="flex-1 bg-[#FF003C] hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              View
                            </button>
                          </div>
                        </div>
                      </div>
    
                      {/* User Card 2 */}
                      <div className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                        <div className="p-6">
                          <div className="flex items-center">
                            <img className="h-16 w-16 rounded-full border-2 border-[#FF003C]" src="https://randomuser.me/api/portraits/women/2.jpg" alt="User" />
                            <div className="ml-4">
                              <h3 className="text-lg font-bold text-white">Sarah Johnson</h3>
                              <p className="text-sm text-gray-400">Creator</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Email:</span>
                              <span className="text-white">sarah.j@example.com</span>
                            </div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Joined:</span>
                              <span className="text-white">Mar 22, 2023</span>
                            </div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Status:</span>
                              <span className="text-green-500">Active</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">NFTs Created:</span>
                              <span className="text-white">47</span>
                            </div>
                          </div>
                          <div className="mt-6 flex space-x-3">
                            <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Edit
                            </button>
                            <button className="flex-1 bg-[#FF003C] hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              View
                            </button>
                          </div>
                        </div>
                      </div>
    
                      {/* User Card 3 */}
                      <div className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                        <div className="p-6">
                          <div className="flex items-center">
                            <img className="h-16 w-16 rounded-full border-2 border-[#FF003C]" src="https://randomuser.me/api/portraits/men/3.jpg" alt="User" />
                            <div className="ml-4">
                              <h3 className="text-lg font-bold text-white">Michael Brown</h3>
                              <p className="text-sm text-gray-400">Premium User</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Email:</span>
                              <span className="text-white">michael.b@example.com</span>
                            </div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Joined:</span>
                              <span className="text-white">Feb 8, 2023</span>
                            </div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Status:</span>
                              <span className="text-green-500">Active</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">NFTs Owned:</span>
                              <span className="text-white">12</span>
                            </div>
                          </div>
                          <div className="mt-6 flex space-x-3">
                            <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Edit
                            </button>
                            <button className="flex-1 bg-[#FF003C] hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              View
                            </button>
                          </div>
                        </div>
                      </div>
    
                      {/* User Card 4 */}
                      <div className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                        <div className="p-6">
                          <div className="flex items-center">
                            <img className="h-16 w-16 rounded-full border-2 border-[#FF003C]" src="https://randomuser.me/api/portraits/women/4.jpg" alt="User" />
                            <div className="ml-4">
                              <h3 className="text-lg font-bold text-white">Emily Davis</h3>
                              <p className="text-sm text-gray-400">Standard User</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Email:</span>
                              <span className="text-white">emily.d@example.com</span>
                            </div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Joined:</span>
                              <span className="text-white">Apr 3, 2023</span>
                            </div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Status:</span>
                              <span className="text-yellow-500">Pending</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">NFTs Owned:</span>
                              <span className="text-white">5</span>
                            </div>
                          </div>
                          <div className="mt-6 flex space-x-3">
                            <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Edit
                            </button>
                            <button className="flex-1 bg-[#FF003C] hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              View
                            </button>
                          </div>
                        </div>
                      </div>
    
                      {/* User Card 5 */}
                      <div className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                        <div className="p-6">
                          <div className="flex items-center">
                            <img className="h-16 w-16 rounded-full border-2 border-[#FF003C]" src="https://randomuser.me/api/portraits/men/5.jpg" alt="User" />
                            <div className="ml-4">
                              <h3 className="text-lg font-bold text-white">David Wilson</h3>
                              <p className="text-sm text-gray-400">Creator</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Email:</span>
                              <span className="text-white">david.w@example.com</span>
                            </div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Joined:</span>
                              <span className="text-white">Jan 30, 2023</span>
                            </div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Status:</span>
                              <span className="text-green-500">Active</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">NFTs Created:</span>
                              <span className="text-white">31</span>
                            </div>
                          </div>
                          <div className="mt-6 flex space-x-3">
                            <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Edit
                            </button>
                            <button className="flex-1 bg-[#FF003C] hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              View
                            </button>
                          </div>
                        </div>
                      </div>
    
                      {/* User Card 6 */}
                      <div className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                        <div className="p-6">
                          <div className="flex items-center">
                            <img className="h-16 w-16 rounded-full border-2 border-[#FF003C]" src="https://randomuser.me/api/portraits/women/6.jpg" alt="User" />
                            <div className="ml-4">
                              <h3 className="text-lg font-bold text-white">Jessica Taylor</h3>
                              <p className="text-sm text-gray-400">Standard User</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Email:</span>
                              <span className="text-white">jessica.t@example.com</span>
                            </div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Joined:</span>
                              <span className="text-white">May 12, 2023</span>
                            </div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Status:</span>
                              <span className="text-red-500">Inactive</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">NFTs Owned:</span>
                              <span className="text-white">3</span>
                            </div>
                          </div>
                          <div className="mt-6 flex space-x-3">
                            <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Edit
                            </button>
                            <button className="flex-1 bg-[#FF003C] hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    {/* Pagination */}
                    <div className="mt-8 flex justify-between items-center">
                      <div className="text-sm text-gray-400">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">24</span> users
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                          Previous
                        </button>
                        <button className="bg-[#FF003C] text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors duration-200 hover:shadow-[0_0_15px_rgba(255,0,60,0.7)]">
                          Next
                        </button>
                      </div>
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
}

export default User
