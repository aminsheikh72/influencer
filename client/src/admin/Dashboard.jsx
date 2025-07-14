import React, { useState } from 'react'
import { Link } from 'react-router-dom';



const Dashboard = () => {

        const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      
        const toggleMobileMenu = () => {
          setMobileMenuOpen(!mobileMenuOpen);
        };


    return (
        <div className="font-sans my-10" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
          <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <div className="hidden mt-10 md:flex md:flex-shrink-0">
              <div className="flex flex-col w-64 border-r border-gray-800">
                <div className="flex flex-col h-0 flex-1">
                  <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
                    <h1 className="text-xl font-bold text-[#FF003C]">ADMIN PANEL</h1>
                  </div>
                  <div className="flex-1 flex flex-col overflow-y-auto">
                    <nav className="flex-1 px-2 py-4 space-y-2">
                      <Link to={'/admin'}  className="flex items-center px-4 py-3 text-white bg-gray-800 rounded-md group">
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
                <a href="dashboard.jsx" className="block px-3 py-2 rounded-md text-white bg-gray-800">Dashboard</a>
                <a href="users.jsx" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white">Users</a>
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
                    <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                  </div>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    {/* Stats Cards */}
                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                      {/* Total Users Card */}
                      <div className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                        <div className="px-4 py-5 sm:p-6">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 bg-[#FF003C] rounded-md p-3">
                              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </div>
                            <div className="ml-5 w-0 flex-1">
                              <dl>
                                <dt className="text-sm font-medium text-gray-400 truncate">
                                  Total Users
                                </dt>
                                <dd>
                                  <div className="text-lg font-bold text-white">24,521</div>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-800 px-4 py-3">
                          <div className="text-sm">
                            <a href="#" className="font-medium text-[#FF003C] hover:text-[#FF003C]">
                              View all users
                            </a>
                          </div>
                        </div>
                      </div>
    
                      {/* Total Creators Card */}
                      <div className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                        <div className="px-4 py-5 sm:p-6">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 bg-[#FF003C] rounded-md p-3">
                              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                              </svg>
                            </div>
                            <div className="ml-5 w-0 flex-1">
                              <dl>
                                <dt className="text-sm font-medium text-gray-400 truncate">
                                  Total Creators
                                </dt>
                                <dd>
                                  <div className="text-lg font-bold text-white">3,842</div>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-800 px-4 py-3">
                          <div className="text-sm">
                            <a href="#" className="font-medium text-[#FF003C] hover:text-[#FF003C]">
                              View all creators
                            </a>
                          </div>
                        </div>
                      </div>
    
                      {/* Revenue Card */}
                      <div className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                        <div className="px-4 py-5 sm:p-6">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 bg-[#FF003C] rounded-md p-3">
                              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="ml-5 w-0 flex-1">
                              <dl>
                                <dt className="text-sm font-medium text-gray-400 truncate">
                                  Revenue
                                </dt>
                                <dd>
                                  <div className="text-lg font-bold text-white">$2.4M</div>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-800 px-4 py-3">
                          <div className="text-sm">
                            <a href="#" className="font-medium text-[#FF003C] hover:text-[#FF003C]">
                              View details
                            </a>
                          </div>
                        </div>
                      </div>
    
                      {/* Conversion Rate Card */}
                      <div className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                        <div className="px-4 py-5 sm:p-6">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 bg-[#FF003C] rounded-md p-3">
                              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                            <div className="ml-5 w-0 flex-1">
                              <dl>
                                <dt className="text-sm font-medium text-gray-400 truncate">
                                  Conversion Rate
                                </dt>
                                <dd>
                                  <div className="text-lg font-bold text-white">24.8%</div>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-800 px-4 py-3">
                          <div className="text-sm">
                            <a href="#" className="font-medium text-[#FF003C] hover:text-[#FF003C]">
                              View analytics
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    {/* Analytics Chart */}
                    <div className="mt-8">
                      <div className="card-gradient border border-gray-800 rounded-lg shadow-lg p-6 hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                        <h2 className="text-xl font-bold text-white mb-4">Weekly Revenue</h2>
                        <div className="h-64 bg-gray-800 rounded-lg flex items-end justify-between px-4 py-4">
                          <div className="w-8 bg-[#FF003C] rounded-t-md h-20 hover:h-32 transition-all duration-300"></div>
                          <div className="w-8 bg-[#FF003C] rounded-t-md h-32 hover:h-44 transition-all duration-300"></div>
                          <div className="w-8 bg-[#FF003C] rounded-t-md h-24 hover:h-36 transition-all duration-300"></div>
                          <div className="w-8 bg-[#FF003C] rounded-t-md h-48 hover:h-56 transition-all duration-300"></div>
                          <div className="w-8 bg-[#FF003C] rounded-t-md h-36 hover:h-48 transition-all duration-300"></div>
                          <div className="w-8 bg-[#FF003C] rounded-t-md h-40 hover:h-52 transition-all duration-300"></div>
                          <div className="w-8 bg-[#FF003C] rounded-t-md h-28 hover:h-40 transition-all duration-300"></div>
                        </div>
                        <div className="flex justify-between px-4 mt-2 text-gray-400 text-sm">
                          <div>Mon</div>
                          <div>Tue</div>
                          <div>Wed</div>
                          <div>Thu</div>
                          <div>Fri</div>
                          <div>Sat</div>
                          <div>Sun</div>
                        </div>
                      </div>
                    </div>
    
                    {/* Recent Activity */}
                    <div className="mt-8">
                      <div className="card-gradient border border-gray-800 rounded-lg shadow-lg p-6 hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-white">John Smith</div>
                              <div className="text-sm text-gray-400">Purchased NFT #4352 for 2.3 ETH</div>
                            </div>
                            <div className="ml-auto text-sm text-gray-400">5m ago</div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" alt="User" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-white">Sarah Johnson</div>
                              <div className="text-sm text-gray-400">Created a new collection "Abstract Dreams"</div>
                            </div>
                            <div className="ml-auto text-sm text-gray-400">12m ago</div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/3.jpg" alt="User" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-white">Michael Brown</div>
                              <div className="text-sm text-gray-400">Listed 5 new items for auction</div>
                            </div>
                            <div className="ml-auto text-sm text-gray-400">27m ago</div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/4.jpg" alt="User" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-white">Emily Davis</div>
                              <div className="text-sm text-gray-400">Followed 3 new creators</div>
                            </div>
                            <div className="ml-auto text-sm text-gray-400">42m ago</div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/5.jpg" alt="User" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-white">David Wilson</div>
                              <div className="text-sm text-gray-400">Sold NFT #7821 for 1.8 ETH</div>
                            </div>
                            <div className="ml-auto text-sm text-gray-400">1h ago</div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                            View All Activity
                          </button>
                        </div>
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

export default Dashboard
