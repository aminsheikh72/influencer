import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-black text-white">
      {/* Left Side Visuals */}
      <div className="relative w-full lg:w-1/2 hidden lg:flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/7034479/pexels-photo-7034479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="auth visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/40 to-black/70 z-10" />
        <div className="relative z-20 max-w-md p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">👋 Join Creatosland</h2>
          <p className="text-white/80 text-sm">
            Create your free account to showcase your content, sell digital assets, and grow your audience. 🚀
          </p>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 py-12">
        <div
          className="w-full max-w-md bg-[#0f0f0f] p-8 rounded-2xl border border-red-600 shadow-lg"
          style={{ boxShadow: '0 0 20px #ff1a1a66' }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Create Account ✨</h2>
          <form>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block mb-1 text-sm">🧑 Full Name</label>
              <div className="flex items-center bg-black border border-gray-700 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-red-600">
                <span className="mr-2"></span>
                <input
                  type="text"
                  className="w-full bg-black focus:outline-none text-sm"
                  placeholder=""
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1 text-sm">📧 Email Address</label>
              <div className="flex items-center bg-black border border-gray-700 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-red-600">
                <span className="mr-2"></span>
                <input
                  type="email"
                  className="w-full bg-black focus:outline-none text-sm"
                  placeholder=""
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block mb-1 text-sm">🔒 Password</label>
              <div className="flex items-center bg-black border border-gray-700 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-red-600">
                <span className="mr-2"></span>
                <input
                  type="password"
                  className="w-full bg-black focus:outline-none text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-md font-semibold transition duration-200 shadow-md hover:shadow-red-800/40"
            >
              Register
            </button>

            {/* Login Link */}
            <p className="mt-6 text-center text-sm text-white/70">
              Already have an account?{' '}
              <Link to={'/login'} className="text-red-600 hover:underline cursor-pointer">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register

