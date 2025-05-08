import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {
  const { user, isLoading , isError, message} = useSelector
  ((state)=> state.auth)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData , setFormData] = useState({
    email: "", password :""
  })

  const {email , password} = formData

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(loginUser(formData))
  }
  useEffect(()=>{
    if (user) {
      navigate("/")
    }
     if(isError && message){
      toast.error(message)
     }

  },[user , isError , message])

  if(isLoading){
    return(
      <h1 className='text-bold text-3xl text-center text-gray-500'>
        Loading....!!!!
      </h1>
    )
  }
  


  return (
    <div className="min-h-screen  flex flex-col lg:flex-row bg-black text-white">
      {/* Left Side Image Section */}
      <div className="relative w-full lg:w-1/2 hidden lg:flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/7034479/pexels-photo-7034479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="auth visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/40 to-black/70 z-10" />
        <div className="relative z-20 max-w-md p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">🔥 Welcome Back to Creatosland</h2>
          <p className="text-white/80 text-sm">
            🎯 Sign in to access your creator dashboard, manage your digital assets, and connect with your audience.
          </p>
        </div>
      </div>

      {/* Right Side Login Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 mt-20 sm:px-12 py-12">
        <div
          className="w-full max-w-md bg-[#0f0f0f] p-8 rounded-2xl border border-red-600 shadow-lg"
          style={{ boxShadow: '0 0 20px #ff1a1a66' }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Sign In 🔐</h2>
          <form>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block mb-1 text-sm">📧 Email Address</label>
              <div className="flex items-center bg-black border border-gray-700 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-red-600">
                {/* Mail Icon */}
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  className="w-full bg-black focus:outline-none text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label className="block mb-1 text-sm">🔒 Password</label>
              <div className="flex items-center bg-black border border-gray-700 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-red-600">
                {/* Lock Icon */}
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-4 4h8a2 2 0 002-2v-6a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2zM12 11a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <input
                  type="password"
                  className="w-full bg-black focus:outline-none text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-md font-semibold transition duration-200 shadow-md hover:shadow-red-800/40"
            >
              Login 🚀
            </button>

            {/* Register Link */}
            <p className="mt-6 text-center text-sm text-white/70">
              Don’t have an account?{' '}
              <Link to={'/register'} className="text-red-500 hover:underline cursor-pointer">Register here ✍️</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
