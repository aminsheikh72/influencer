import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { FaUser, FaEnvelope, FaLock, FaRocket, FaPhone } from "react-icons/fa"
import { registerUser } from "../features/auth/authSlice"
import { toast } from "react-toastify";
import Loading from "../components/loaders/Loading"


const Register = () => {
  const { user, isLoading, isSuccess, isError, message } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    phone: "",
    email: ""
  })
  const { name, email, phone, password } = formData


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    console.log("working")
    e.preventDefault()
    dispatch(registerUser(formData))
  }

  useEffect(() => {
    if (user) {
      navigate("/")
    }

    if (isError && message) {
      toast.error(message, {
        position: "bottom-right",
        theme: "dark"
      })

    }
  }, [user, isError, message])

  if (isLoading) {
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
          <h2 className="text-4xl font-bold mb-4">Join Creatosland</h2>
          <p className="text-white/80 text-lg">
            Create your free account to showcase your content, sell digital assets, and grow your audience.
          </p>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">Create Account</h2>
            <p className="text-gray-400">Fill in your details to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaUser className="text-gray-500" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-gray-800 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaPhone className="text-gray-500" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-gray-800 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="123-456-7890"
                  required
                />
              </div>
            </div>

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
                  value={email}
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
                  value={password}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-gray-800 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Register Button */}
            <button

              type="submit"
              className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-semibold transition duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/30"
            >
              Create Account
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-red-500 hover:text-red-400 font-medium transition-colors">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
