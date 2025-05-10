

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaEnvelope, FaLock, FaRocket } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../features/auth/authSlice"
import { toast } from 'react-toastify';
import Loading from "../components/loaders/Loading"


const Login = () => {

  const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser(formData))
    
  }

  useEffect(() => {
    if (user) {
      navigate("/")
      toast.success("User Login Successfully",{
        position : "top-right",
        theme : "dark"
      })
    }
  }, [user])
  useEffect(() => {
    window.scrollTo(0, 0)
    if (isError && message) {
      toast.error(message, {
        position: "bottom-right",
        theme: "dark"
      })
    }
  }, [isError, message])

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#0a0a0a] text-white">
      {/* Left Side Visuals */}
      <div className="relative w-full lg:w-1/2 hidden lg:flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/7034479/pexels-photo-7034479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="auth visual"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-10000 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/50 to-black/80 z-10" />
        <div className="relative z-20 max-w-md p-8 text-center">
          <div className="mb-6 inline-block p-4 bg-black/30 rounded-full backdrop-blur-sm">
            <FaRocket className="text-5xl text-red-500" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
          <p className="text-white/80 text-lg">
            Sign in to access your creator dashboard, manage your digital assets, and connect with your audience.
          </p>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">Sign In</h2>
            <p className="text-gray-400">Access your Creatosland account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaEnvelope className="text-gray-500" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-gray-800 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaLock className="text-gray-500" />
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-gray-800 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex justify-end">
                <Link to="/forgot-password" className="text-sm text-gray-400 hover:text-red-500 transition-colors">
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-semibold transition duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/30 flex items-center justify-center"
            >
              {isLoading ? (
                <svg
                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : null}
              {isLoading ? "Signing In..." : "Sign In"}
            </button>

            {/* Register Link */}
            <p className="text-center text-gray-400">
              Don't have an account?{" "}
              <Link to="/register" className="text-red-500 hover:text-red-400 font-medium transition-colors">
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
