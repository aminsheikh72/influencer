import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Creator = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


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
                      <a href="users.jsx" className="flex items-center px-4 py-3 text-gray-300 rounded-md hover:bg-gray-800 group transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#FF003C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        Users
                      </a>
                      <a href="creators.jsx" className="flex items-center px-4 py-3 text-white bg-gray-800 rounded-md group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#FF003C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      <Link to={'/admin'}  className="flex items-center px-4 py-3 text-white hover:bg-gray-800 rounded-md group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#FF003C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Dashboard
                      </Link>
                      <Link to={'/admin/user'} className="flex items-center px-4 py-3 text-gray-300 rounded-md hover:bg-gray-800 group transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#FF003C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        Users
                      </Link>
                      <Link to={'/admin/creator'} className="flex items-center px-4 py-3 text-gray-300 rounded-md bg-gray-800 group transition-colors duration-200">
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
                <a href="users.jsx" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white">Users</a>
                <a href="creators.jsx" className="block px-3 py-2 rounded-md text-white bg-gray-800">Creators</a>
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
                      <h1 className="text-3xl font-bold text-white">Creators</h1>
                      <div className="flex space-x-3">
                        <div className="relative">
                          <input type="text" placeholder="Search creators..." className="bg-gray-800 text-white rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#FF003C]" />
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <button className="bg-[#FF003C] hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 hover:shadow-[0_0_15px_rgba(255,0,60,0.7)]">
                          Add Creator
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    {/* Creator Cards */}
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {/* Creator Card 1 */}
                      <div className="creator-card card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300 relative">
                        <div className="relative">
                          <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Creator Banner" />
                          <div className="absolute -bottom-10 left-6">
                            <img className="h-20 w-20 rounded-full border-4 border-[#FF003C]" src="https://randomuser.me/api/portraits/women/2.jpg" alt="Creator" />
                          </div>
                        </div>
                        <div className="p-6 pt-12">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-bold text-white">Sarah Johnson</h3>
                              <p className="text-sm text-gray-400">@sarahcreates</p>
                            </div>
                            <div className="bg-[#FF003C] text-white text-xs font-bold px-2 py-1 rounded-full">
                                text-white text-xs font-bold px-2 py-1 rounded-full"
                              Verified
                            </div>
                          </div>
                          <div className="mt-4 flex justify-between text-sm">
                            <div className="text-center">
                              <div className="font-bold text-white">247</div>
                              <div className="text-gray-400">NFTs</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-white">15.2K</div>
                              <div className="text-gray-400">Followers</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-white">$1.2M</div>
                              <div className="text-gray-400">Volume</div>
                            </div>
                          </div>
                          <div className="mt-6 flex space-x-3">
                            <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Profile
                            </button>
                            <button className="flex-1 bg-[#FF003C] hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Follow
                            </button>
                          </div>
                        </div>
                        <div className="creator-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300">
                          <div className="text-center p-4">
                            <h3 className="text-xl font-bold text-white mb-2">Sarah Johnson</h3>
                            <p className="text-gray-300 mb-4">Digital artist specializing in abstract and futuristic art pieces.</p>
                            <Link to="/creators/3" className="bg-[#FF003C] hover:bg-opacity-80 text-white font-bold py-2 px-6 rounded-md transition-colors duration-200 hover:shadow-[0_0_15px_rgba(255,0,60,0.7)]">
                              View Gallery
                            </Link>
                          </div>
                        </div>
                      </div>
    
                      {/* Creator Card 2 */}
                      <div className="creator-card card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300 relative">
                        <div className="relative">
                          <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Creator Banner" />
                          <div className="absolute -bottom-10 left-6">
                            <img className="h-20 w-20 rounded-full border-4 border-[#FF003C]" src="https://randomuser.me/api/portraits/men/5.jpg" alt="Creator" />
                          </div>
                        </div>
                        <div className="p-6 pt-12">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-bold text-white">David Wilson</h3>
                              <p className="text-sm text-gray-400">@daveart</p>
                            </div>
                            <div className="bg-[#FF003C] text-white text-xs font-bold px-2 py-1 rounded-full">
                              Verified
                            </div>
                          </div>
                          <div className="mt-4 flex justify-between text-sm">
                            <div className="text-center">
                              <div className="font-bold text-white">183</div>
                              <div className="text-gray-400">NFTs</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-white">9.7K</div>
                              <div className="text-gray-400">Followers</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-white">$845K</div>
                              <div className="text-gray-400">Volume</div>
                            </div>
                          </div>
                          <div className="mt-6 flex space-x-3">
                            <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Profile
                            </button>
                            <button className="flex-1 bg-[#FF003C] hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Follow
                            </button>
                          </div>
                        </div>
                        <div className="creator-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300">
                          <div className="text-center p-4">
                            <h3 className="text-xl font-bold text-white mb-2">David Wilson</h3>
                            <p className="text-gray-300 mb-4">3D artist creating immersive digital environments and characters.</p>
                            <button className="bg-[#FF003C] hover:bg-opacity-80 text-white font-bold py-2 px-6 rounded-md transition-colors duration-200 hover:shadow-[0_0_15px_rgba(255,0,60,0.7)]">
                              View Gallery
                            </button>
                          </div>
                        </div>
                      </div>
    
                      {/* Creator Card 3 */}
                      <div className="creator-card card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300 relative">
                        <div className="relative">
                          <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1614729375564-c7f0816d5c8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Creator Banner" />
                          <div className="absolute -bottom-10 left-6">
                            <img className="h-20 w-20 rounded-full border-4 border-[#FF003C]" src="https://randomuser.me/api/portraits/women/8.jpg" alt="Creator" />
                          </div>
                        </div>
                        <div className="p-6 pt-12">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-bold text-white">Mia Chen</h3>
                              <p className="text-sm text-gray-400">@miachen</p>
                            </div>
                            <div className="bg-[#FF003C] text-white text-xs font-bold px-2 py-1 rounded-full">
                              Verified
                            </div>
                          </div>
                          <div className="mt-4 flex justify-between text-sm">
                            <div className="text-center">
                              <div className="font-bold text-white">92</div>
                              <div className="text-gray-400">NFTs</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-white">6.3K</div>
                              <div className="text-gray-400">Followers</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-white">$520K</div>
                              <div className="text-gray-400">Volume</div>
                            </div>
                          </div>
                          <div className="mt-6 flex space-x-3">
                            <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Profile
                            </button>
                            <button className="flex-1 bg-[#FF003C] hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Follow
                            </button>
                          </div>
                        </div>
                        <div className="creator-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300">
                          <div className="text-center p-4">
                            <h3 className="text-xl font-bold text-white mb-2">Mia Chen</h3>
                            <p className="text-gray-300 mb-4">Illustrator and concept artist with a focus on anime-inspired digital art.</p>
                            <button className="bg-[#FF003C] hover:bg-opacity-80 text-white font-bold py-2 px-6 rounded-md transition-colors duration-200 hover:shadow-[0_0_15px_rgba(255,0,60,0.7)]">
                              View Gallery
                            </button>
                          </div>
                        </div>
                      </div>
    
                      {/* Creator Card 4 */}
                      <div className="creator-card card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300 relative">
                        <div className="relative">
                          <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Creator Banner" />
                          <div className="absolute -bottom-10 left-6">
                            <img className="h-20 w-20 rounded-full border-4 border-[#FF003C]" src="https://randomuser.me/api/portraits/men/12.jpg" alt="Creator" />
                          </div>
                        </div>
                        <div className="p-6 pt-12">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-bold text-white">Alex Morgan</h3>
                              <p className="text-sm text-gray-400">@alexcrypto</p>
                            </div>
                            <div className="bg-[#FF003C] text-white text-xs font-bold px-2 py-1 rounded-full">
                              Verified
                            </div>
                          </div>
                          <div className="mt-4 flex justify-between text-sm">
                            <div className="text-center">
                              <div className="font-bold text-white">156</div>
                              <div className="text-gray-400">NFTs</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-white">12.8K</div>
                              <div className="text-gray-400">Followers</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-white">$1.5M</div>
                              <div className="text-gray-400">Volume</div>
                            </div>
                          </div>
                          <div className="mt-6 flex space-x-3">
                            <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Profile
                            </button>
                            <button className="flex-1 bg-[#FF003C] hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Follow
                            </button>
                          </div>
                        </div>
                        <div className="creator-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300">
                          <div className="text-center p-4">
                            <h3 className="text-xl font-bold text-white mb-2">Alex Morgan</h3>
                            <p className="text-gray-300 mb-4">Crypto artist specializing in generative art and algorithmic creations.</p>
                            <button className="bg-[#FF003C] hover:bg-opacity-80 text-white font-bold py-2 px-6 rounded-md transition-colors duration-200 hover:shadow-[0_0_15px_rgba(255,0,60,0.7)]">
                              View Gallery
                            </button>
                          </div>
                        </div>
                      </div>
    
                      {/* Creator Card 5 */}
                      <div className="creator-card card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300 relative">
                        <div className="relative">
                          <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1633107850565-3b9d0d2a7fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Creator Banner" />
                          <div className="absolute -bottom-10 left-6">
                            <img className="h-20 w-20 rounded-full border-4 border-[#FF003C]" src="https://randomuser.me/api/portraits/men/22.jpg" alt="Creator" />
                          </div>
                        </div>
                        <div className="p-6 pt-12">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-bold text-white">James Lee</h3>
                              <p className="text-sm text-gray-400">@jamesart</p>
                            </div>
                            <div className="bg-[#FF003C] text-white text-xs font-bold px-2 py-1 rounded-full">
                              Verified
                            </div>
                          </div>
                          <div className="mt-4 flex justify-between text-sm">
                            <div className="text-center">
                              <div className="font-bold text-white">78</div>
                              <div className="text-gray-400">NFTs</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-white">5.4K</div>
                              <div className="text-gray-400">Followers</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-white">$320K</div>
                              <div className="text-gray-400">Volume</div>
                            </div>
                          </div>
                          <div className="mt-6 flex space-x-3">
                            <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Profile
                            </button>
                            <button className="flex-1 bg-[#FF003C] hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Follow
                            </button>
                          </div>
                        </div>
                        <div className="creator-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300">
                          <div className="text-center p-4">
                            <h3 className="text-xl font-bold text-white mb-2">James Lee</h3>
                            <p className="text-gray-300 mb-4">Traditional artist who transitioned to digital NFTs with a focus on landscapes.</p>
                            <button className="bg-[#FF003C] hover:bg-opacity-80 text-white font-bold py-2 px-6 rounded-md transition-colors duration-200 hover:shadow-[0_0_15px_rgba(255,0,60,0.7)]">
                              View Gallery
                            </button>
                          </div>
                        </div>
                      </div>
    
                      {/* Creator Card 6 */}
                      <div className="creator-card card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300 relative">
                        <div className="relative">
                          <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Creator Banner" />
                          <div className="absolute -bottom-10 left-6">
                            <img className="h-20 w-20 rounded-full border-4 border-[#FF003C]" src="https://randomuser.me/api/portraits/women/32.jpg" alt="Creator" />
                          </div>
                        </div>
                        <div className="p-6 pt-12">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-bold text-white">Sophia Rodriguez</h3>
                              <p className="text-sm text-gray-400">@sophiart</p>
                            </div>
                            <div className="bg-[#FF003C] text-white text-xs font-bold px-2 py-1 rounded-full">
                              Verified
                            </div>
                          </div>
                          <div className="mt-4 flex justify-between text-sm">
                            <div className="text-center">
                              <div className="font-bold text-white">112</div>
                              <div className="text-gray-400">NFTs</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-white">8.9K</div>
                              <div className="text-gray-400">Followers</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-white">$780K</div>
                              <div className="text-gray-400">Volume</div>
                            </div>
                          </div>
                          <div className="mt-6 flex space-x-3">
                            <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Profile
                            </button>
                            <button className="flex-1 bg-[#FF003C] hover:bg-opacity-80 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                              Follow
                            </button>
                          </div>
                        </div>
                        <div className="creator-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300">
                          <div className="text-center p-4">
                            <h3 className="text-xl font-bold text-white mb-2">Sophia Rodriguez</h3>
                            <p className="text-gray-300 mb-4">Mixed media artist creating surreal digital compositions and animations.</p>
                            <button className="bg-[#FF003C] hover:bg-opacity-80 text-white font-bold py-2 px-6 rounded-md transition-colors duration-200 hover:shadow-[0_0_15px_rgba(255,0,60,0.7)]">
                              View Gallery
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    {/* Pagination */}
                    <div className="mt-8 flex justify-between items-center">
                      <div className="text-sm text-gray-400">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">42</span> creators
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
            .creator-card:hover .creator-overlay {
              opacity: 1;
            }
          `}</style>
        </div>
      );
}

export default Creator
