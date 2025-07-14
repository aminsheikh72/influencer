import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllBookings } from '../features/booking/bookingSlice';

const Booking = () => {

  const {bookings} = useSelector(state => state.booking)
  

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllBookings())
  },[])

 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openUpdateModal = (booking) => {
    setSelectedBooking(booking);
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedBooking(null);
  };

  // Sample booking data
  // const bookings = [
  //   {
  //     id: 'BK-1001',
  //     user: {
  //       name: 'John Smith',
  //       email: 'john.smith@example.com',
  //       avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  //     },
  //     event: 'NFT Exhibition - Cosmic Dreams',
  //     date: '2023-06-15',
  //     time: '14:00 - 16:00',
  //     status: 'Confirmed',
  //     price: '$120.00'
  //   },
  //   {
  //     id: 'BK-1002',
  //     user: {
  //       name: 'Sarah Johnson',
  //       email: 'sarah.j@example.com',
  //       avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
  //     },
  //     event: 'Digital Art Workshop',
  //     date: '2023-06-18',
  //     time: '10:00 - 13:00',
  //     status: 'Pending',
  //     price: '$85.00'
  //   },
  //   {
  //     id: 'BK-1003',
  //     user: {
  //       name: 'Michael Brown',
  //       email: 'michael.b@example.com',
  //       avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
  //     },
  //     event: 'Metaverse Tour - New Horizons',
  //     date: '2023-06-20',
  //     time: '18:00 - 20:00',
  //     status: 'Confirmed',
  //     price: '$150.00'
  //   },
  //   {
  //     id: 'BK-1004',
  //     user: {
  //       name: 'Emily Davis',
  //       email: 'emily.d@example.com',
  //       avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
  //     },
  //     event: 'NFT Creation Masterclass',
  //     date: '2023-06-22',
  //     time: '15:00 - 18:00',
  //     status: 'Cancelled',
  //     price: '$200.00'
  //   },
  //   {
  //     id: 'BK-1005',
  //     user: {
  //       name: 'David Wilson',
  //       email: 'david.w@example.com',
  //       avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
  //     },
  //     event: 'Virtual Gallery Opening',
  //     date: '2023-06-25',
  //     time: '19:00 - 21:00',
  //     status: 'Confirmed',
  //     price: '$75.00'
  //   },
  //   {
  //     id: 'BK-1006',
  //     user: {
  //       name: 'Jessica Taylor',
  //       email: 'jessica.t@example.com',
  //       avatar: 'https://randomuser.me/api/portraits/women/6.jpg'
  //     },
  //     event: 'Blockchain Art Symposium',
  //     date: '2023-06-28',
  //     time: '09:00 - 17:00',
  //     status: 'Pending',
  //     price: '$250.00'
  //   }
  // ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'text-green-500';
      case 'Pending':
        return 'text-yellow-500';
      case 'Cancelled':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };



  return (
    <div className="font-sans" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
      <div className="flex h-screen my-10 overflow-hidden">
        {/* Sidebar */}
       <div className="hidden my-10 md:flex md:flex-shrink-0">
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
            <a href="bookings.jsx" className="block px-3 py-2 rounded-md text-white bg-gray-800">Bookings</a>
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
                  <h1 className="text-3xl font-bold text-white">Bookings</h1>
                  <div className="flex space-x-3">
                    <div className="relative">
                      <input type="text" placeholder="Search bookings..." className="bg-gray-800 text-white rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#FF003C]" />
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <button className="bg-[#FF003C] hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 hover:shadow-[0_0_15px_rgba(255,0,60,0.7)]">
                      Add Booking
                    </button>
                  </div>
                </div>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Booking Stats */}
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-[#FF003C] rounded-md p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-400 truncate">
                              Total Bookings
                            </dt>
                            <dd>
                              <div className="text-lg font-bold text-white">1,248</div>
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-400 truncate">
                              Confirmed
                            </dt>
                            <dd>
                              <div className="text-lg font-bold text-white">876</div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-400 truncate">
                              Pending
                            </dt>
                            <dd>
                              <div className="text-lg font-bold text-white">243</div>
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-400 truncate">
                              Cancelled
                            </dt>
                            <dd>
                              <div className="text-lg font-bold text-white">129</div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bookings Table */}
                <div className="mt-8">
                  <div className="card-gradient border border-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-800">
                        <thead className="bg-gray-900">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                              Booking ID
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                              User
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                              Event
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                              Date & Time
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                              Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                          {bookings.map((booking) => (
                            <tr key={booking.id} className="hover:bg-gray-900 transition-colors duration-200">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                {booking._id}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={booking.user.avatar || "/placeholder.svg"} alt="" />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-white">{booking.user.name}</div>
                                    <div className="text-sm text-gray-400">{booking.user.email}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                {booking.event}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-white">{booking.user.createdAt}</div>
                                <div className="text-sm text-gray-400">{booking.time}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                                  {booking.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                {booking.influencer.rate}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button 
                                  onClick={() => openUpdateModal(booking)}
                                  className="text-[#FF003C] hover:text-[#FF003C] hover:underline mr-4"
                                >
                                  Update
                                </button>
                                <button className="text-gray-400 hover:text-white hover:underline">
                                  View
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-between items-center">
                  <div className="text-sm text-gray-400">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">1,248</span> bookings
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

      {/* Update Booking Modal */}
      {showUpdateModal && selectedBooking && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom card-gradient rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-gray-800">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-[#FF003C] sm:mx-0 sm:h-10 sm:w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-white">
                      Update Booking
                    </h3>
                    <div className="mt-4 space-y-4">
                      <div>
                        <label htmlFor="booking-id" className="block text-sm font-medium text-gray-400">
                          Booking ID
                        </label>
                        <input
                          type="text"
                          id="booking-id"
                          className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-[#FF003C] focus:border-[#FF003C]"
                          value={selectedBooking.id}
                          disabled
                        />
                      </div>
                      <div>
                        <label htmlFor="user-name" className="block text-sm font-medium text-gray-400">
                          User
                        </label>
                        <input
                          type="text"
                          id="user-name"
                          className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-[#FF003C] focus:border-[#FF003C]"
                          defaultValue={selectedBooking.user.name}
                        />
                      </div>
                      <div>
                        <label htmlFor="event" className="block text-sm font-medium text-gray-400">
                          Event
                        </label>
                        <input
                          type="text"
                          id="event"
                          className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-[#FF003C] focus:border-[#FF003C]"
                          defaultValue={selectedBooking.event}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-gray-400">
                            Date
                          </label>
                          <input
                            type="date"
                            id="date"
                            className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-[#FF003C] focus:border-[#FF003C]"
                            defaultValue={selectedBooking.date}
                          />
                        </div>
                        <div>
                          <label htmlFor="time" className="block text-sm font-medium text-gray-400">
                            Time
                          </label>
                          <input
                            type="text"
                            id="time"
                            className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-[#FF003C] focus:border-[#FF003C]"
                            defaultValue={selectedBooking.time}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-400">
                          Status
                        </label>
                        <select
                          id="status"
                          className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-[#FF003C] focus:border-[#FF003C]"
                          defaultValue={selectedBooking.status}
                        >
                          <option>Confirmed</option>
                          <option>Pending</option>
                          <option>Cancelled</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-400">
                          Price
                        </label>
                        <input
                          type="text"
                          id="price"
                          className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-[#FF003C] focus:border-[#FF003C]"
                          defaultValue={selectedBooking.price}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#FF003C] text-base font-medium text-white hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF003C] sm:ml-3 sm:w-auto sm:text-sm hover:shadow-[0_0_15px_rgba(255,0,60,0.7)]"
                  onClick={closeUpdateModal}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-700 shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeUpdateModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .card-gradient {
          background: linear-gradient(145deg, rgba(40, 40, 40, 0.6), rgba(20, 20, 20, 0.8));
        }
      `}</style>
    </div>
  );
}

export default Booking
