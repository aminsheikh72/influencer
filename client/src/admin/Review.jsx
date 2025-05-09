import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Review = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      user: {
        name: 'John Smith',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      product: 'Cosmic Dreams Collection',
      rating: 5,
      date: '2 days ago',
      content: 'Absolutely amazing collection! The attention to detail in each piece is incredible. I\'ve purchased three NFTs from this collection and they\'re all stunning. The artist\'s vision really comes through in the work.'
    },
    {
      id: 2,
      user: {
        name: 'Sarah Johnson',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
      },
      product: 'Abstract Dreams',
      rating: 4,
      date: '1 week ago',
      content: 'I\'m really impressed with the quality of this collection. The animations are smooth and the concept is unique. My only suggestion would be to add more variety in the color schemes. Overall, a great addition to my portfolio!'
    },
    {
      id: 3,
      user: {
        name: 'Michael Brown',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
      },
      product: 'Neon Futures',
      rating: 3,
      date: '2 weeks ago',
      content: 'The concept is interesting but the execution could be better. Some of the pieces feel rushed and don\'t have the same level of detail as others in the collection. I appreciate the artist\'s vision but hope to see more consistency in future releases.'
    },
    {
      id: 4,
      user: {
        name: 'Emily Davis',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
      },
      product: 'Digital Horizons',
      rating: 5,
      date: '3 weeks ago',
      content: 'This collection exceeded my expectations! The artist has created a truly immersive experience with each piece telling its own story while still maintaining a cohesive theme. The attention to detail is remarkable and the use of color is masterful.'
    },
    {
      id: 5,
      user: {
        name: 'David Wilson',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
      },
      product: 'Cyberpunk Dreams',
      rating: 4,
      date: '1 month ago',
      content: 'As a collector of cyberpunk art, I was immediately drawn to this collection. The neon aesthetics and futuristic themes are well executed. Some pieces are more polished than others, but overall it\'s a solid collection that I\'m proud to own.'
    },
    {
      id: 6,
      user: {
        name: 'Jessica Taylor',
        avatar: 'https://randomuser.me/api/portraits/women/6.jpg'
      },
      product: 'Ethereal Landscapes',
      rating: 2,
      date: '1 month ago',
      content: 'I was disappointed with this collection. The preview images looked promising, but the actual NFTs lack depth and seem hastily created. The concept had potential but the execution falls short. I expected more given the artist\'s previous work.'
    }
  ];

  const filteredReviews = selectedFilter === 'All' 
    ? reviews 
    : reviews.filter(review => review.rating === parseInt(selectedFilter));




  return (
    <div className="font-sans" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
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
                       <Link to={'/admin/booking'} className="flex items-center px-4 py-3 text-gray-300 rounded-md bg-gray-800 group transition-colors duration-200">
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
            <a href="creators.jsx" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white">Creators</a>
            <a href="bookings.jsx" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white">Bookings</a>
            <a href="reviews.jsx" className="block px-3 py-2 rounded-md text-white bg-gray-800">Reviews</a>
            <button className="w-full text-left block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white">Sign Out</button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="flex-1 relative overflow-y-auto focus:outline-none pt-16 md:pt-0">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl font-bold text-white">Reviews</h1>
                  <div className="flex space-x-3">
                    <div className="relative">
                      <input type="text" placeholder="Search reviews..." className="bg-gray-800 text-white rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#FF003C]" />
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="relative">
                      <select 
                        className="bg-gray-800 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF003C] appearance-none pr-8"
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                      >
                        <option value="All">All Ratings</option>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                      </select>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Reviews Stats */}
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-[#FF003C] rounded-md p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                          </svg>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-400 truncate">
                              Total Reviews
                            </dt>
                            <dd>
                              <div className="text-lg font-bold text-white">3,842</div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-[#FF003C] rounded-md p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-400 truncate">
                              Average Rating
                            </dt>
                            <dd>
                              <div className="text-lg font-bold text-white">4.7/5</div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-400 truncate">
                              Positive Reviews
                            </dt>
                            <dd>
                              <div className="text-lg font-bold text-white">92%</div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-red-500 rounded-md p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2" />
                          </svg>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-400 truncate">
                              Negative Reviews
                            </dt>
                            <dd>
                              <div className="text-lg font-bold text-white">8%</div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reviews List */}
                <div className="mt-8 space-y-6">
                  {filteredReviews.map((review) => (
                    <div key={review.id} className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                      <div className="p-6">
                        <div className="flex items-start">
                          <img className="h-12 w-12 rounded-full" src={review.user.avatar || "/placeholder.svg"} alt={review.user.name} />
                          <div className="ml-4 flex-1">
                            <div className="flex justify-between">
                              <h3 className="text-lg font-bold text-white">{review.user.name}</h3>
                              <div className="flex items-center">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <svg 
                                      key={i} 
                                      xmlns="http://www.w3.org/2000/svg" 
                                      className={`h-5 w-5 ${i < review.rating ? 'text-[#FF003C]' : 'text-gray-600'}`} 
                                      viewBox="0 0 20 20" 
                                      fill="currentColor"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="ml-2 text-sm text-gray-400">{review.date}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-400 mt-1">Reviewed: <span className="text-white">{review.product}</span></p>
                            <p className="mt-3 text-white">{review.content}</p>
                            <div className="mt-4 flex justify-end space-x-3">
                              <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium py-1 px-3 rounded-md transition-colors duration-200">
                                Reply
                              </button>
                              <button className="bg-[#FF003C] hover:bg-opacity-80 text-white text-sm font-medium py-1 px-3 rounded-md transition-colors duration-200 hover:shadow-[0_0_15px_rgba(255,0,60,0.7)]">
                                Feature
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-between items-center">
                  <div className="text-sm text-gray-400">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">3,842</span> reviews
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

export default Review
