import React, { useEffect, useState } from 'react'
import { Users, Home, User, Calendar, LogOut, CheckCircle } from "lucide-react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCreators, getAllCreators } from '../features/creator/creatorSlice'

const Creator = () => {

  const {allCreators} = useSelector(state => state.creator)
  console.log(allCreators);
  

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllCreators())
  },[])

  
  const [creators, setCreators] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      username: "@sarahcreates",
      description: "Digital artist specializing in abstract and futuristic art pieces.",
      niche: "Digital Art",
      followers: 15200,
      nfts: 247,
      volume: 1200000,
      instagram_handle: "@sarahcreates",
      rate: 2500,
      location: "New York, USA",
      profilePic: "/placeholder.svg?height=100&width=100",
      bannerPic: "/placeholder.svg?height=200&width=600",
      gender: "Female",
      verified: true,
    },
    {
      id: 2,
      name: "David Wilson",
      username: "@daveart",
      niche: "Sculpture",
      followers: 9700,
      nfts: 183,
      volume: 845000,
      instagram_handle: "@daveart",
      rate: 3000,
      location: "London, UK",
      profilePic: "/placeholder.svg?height=100&width=100",
      bannerPic: "/placeholder.svg?height=200&width=600",
      gender: "Male",
      verified: true,
    },
    {
      id: 3,
      name: "Mia Chen",
      username: "@miachen",
      niche: "Photography",
      followers: 6300,
      nfts: 92,
      volume: 520000,
      instagram_handle: "@miachen",
      rate: 1800,
      location: "Tokyo, Japan",
      profilePic: "/placeholder.svg?height=100&width=100",
      bannerPic: "/placeholder.svg?height=200&width=600",
      gender: "Female",
      verified: true,
    },
  ])

  const [showAddCreator, setShowAddCreator] = useState(false)
  const [newCreator, setNewCreator] = useState({
    name: "",
    niche: "", 
    followers: "",
    instagram_handle: "",
    rate: "",
    location: "",
    profilePic: "",
    gender: "",
  })

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
      return `$${(num / 1000).toFixed(0)}K`
    }
    // return num.toString()
  }

  const formatFollowers = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }




  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewCreator({
      ...newCreator,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const creatorToAdd = {
      id: creators.length + 1,
      username: newCreator.instagram_handle,
      nfts: Math.floor(Math.random() * 200),
      volume: Math.floor(Math.random() * 1000000),
      verified: Math.random() > 0.5,
      bannerPic: "/placeholder.svg?height=200&width=600",
      profilePic: newCreator.profilePic || "/placeholder.svg?height=100&width=100",
      ...newCreator,
      followers: Number.parseInt(newCreator.followers) || 0,
      rate: Number.parseInt(newCreator.rate) || 0,
    }

   
    
    // dispatch(addCreators(newCreator))

    setCreators([...creators, creatorToAdd])
    setNewCreator({
      name: "",
      niche: "",
      followers: "",
      instagram_handle: "",
      rate: "",
      location: "",
      profilePic: "",
      gender: "",
    })
    setShowAddCreator(false)
  }


  
  return (
    <div className=" flex my-10 font-sans" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
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

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Creators</h1>
          <button 
            onClick={() => setShowAddCreator(true)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Add Creator
          </button>
        </div>

        {/* Creator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCreators.map((creator) => (
            <div key={creator.id} className="bg-gray-950 rounded-lg overflow-hidden border border-gray-700">
              {/* Banner Image */}
              <div className="h-32 bg-gradient-to-r from-purple-900 via-blue-800 to-teal-700 relative">
                <img 
                  src={creator.bannerPic || "/placeholder.svg"} 
                  alt="Creator Banner" 
                  className="w-full h-full object-cover"
                />
                
                {/* Profile Image */}
                <div className="absolute -bottom-10 left-4">
                  <div className={`rounded-full border-4 ${creator.verified ? 'border-red-500' : 'border-gray-700'} overflow-hidden h-20 w-20`}>
                    <img 
                      src={creator.profilePic || "/placeholder.svg"} 
                      alt={creator.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Creator Name */}
                <div className="absolute bottom-2 left-28">
                  <h2 className="text-xl font-bold">{creator.name}</h2>
                  <h2 className="text-md font-light">{creator.niche}</h2>
                </div>
              </div>
              
              {/* Creator Info */}
              <div className="pt-12 px-4 pb-4">
                <div className="flex items-center mb-2">
                  <p className="text-gray-400">{creator.username}</p>
                  {creator.verified && (
                    <span className="ml-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">Verified</span>
                  )}
                </div>
                
                {creator.description && (
                  <p className="text-gray-300 text-sm mb-4">{creator.description}</p>
                )}
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center">
                    <p className="text-xl font-bold">{creator.location}</p>
                    <p className="text-gray-400 text-sm">Location</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold">{formatFollowers(creator.followers)}</p>
                    <p className="text-gray-400 text-sm">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold">{formatNumber(creator.rate)}</p>
                    <p className="text-gray-400 text-sm">Rate</p>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md">
                    Profile
                  </button>
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md">
                    Follow
                  </button>
                </div>
                
                {/* View Gallery Button (only for first creator) */}
                {creator.id === 1 && (
                  <button className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md">
                    View Gallery
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Creator Modal */}
      {showAddCreator && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Creator</h2>
              <button 
                onClick={() => setShowAddCreator(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-0.1">
                <div>
                  <label className="block text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newCreator.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1">Niche</label>
                  <input
                    type="text"
                    name="niche"
                    value={newCreator.niche}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                    required
                  />
                </div>

                
                
                <div>
                  <label className="block text-gray-300 mb-1">Followers</label>
                  <input
                    type="number"
                    name="followers"
                    value={newCreator.followers}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1">Instagram Handle</label>
                  <input
                    type="text"
                    name="instagram_handle"
                    value={newCreator.instagram_handle}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1">Rate ($)</label>
                  <input
                    type="number"
                    name="rate"
                    value={newCreator.rate}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={newCreator.location}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1">Profile Picture URL</label>
                  <input
                    type="src"
                    name="profilePic"
                    value={newCreator.profilePic}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                    placeholder="/placeholder.svg?height=100&width=100"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1">Gender</label>
                  <select
                    name="gender"
                    value={newCreator.gender}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    {/* <option value="Prefer not to say">Prefer not to say</option> */}
                  </select>
                </div>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddCreator(false)}
                    className="bg-gray-600 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md"
                  >
                    Add Creator
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Creator
