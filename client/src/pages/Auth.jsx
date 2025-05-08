import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Auth = () => {
  const { type } = useParams()

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Column (Image + Text) */}
        <div className="hidden lg:block relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 z-10"></div>
          <img
            src="https://images.pexels.com/photos/7034479/pexels-photo-7034479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Digital creator"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center z-20 p-12">
            <Link to="/" className="absolute top-8 left-8 flex items-center">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-primary rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-primary to-secondary-dark rounded-sm transform rotate-45"></div>
                </div>
              </div>
              <span className="ml-2 text-xl font-bold font-display text-white">
                Creatos<span className="text-primary">land</span>
              </span>
            </Link>

            <div className="max-w-md text-center">
              <h1 className="text-4xl font-bold font-display text-white mb-4">
                {type === 'login'
                  ? 'Welcome Back to Creatosland'
                  : 'Join the Creator Revolution'}
              </h1>
              <p className="text-white/80">
                {type === 'login'
                  ? 'Sign in to access your creator dashboard, manage your digital assets, and connect with your audience.'
                  : 'Create, share, and monetize your digital content with our powerful platform built for the creator economy.'}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Form UI) */}
        <div className="flex items-center justify-center p-4 sm:p-8">
          <div className="card-glow max-w-md w-full p-6 sm:p-10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">
                {type === 'login' ? 'Sign In' : 'Create Account'}
              </h2>
              <Link to="/" className="lg:hidden flex items-center">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-primary rounded-full opacity-70 animate-pulse"></div>
                  <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-primary to-secondary-dark rounded-sm transform rotate-45"></div>
                  </div>
                </div>
              </Link>
            </div>

            <form>
              {type === 'register' && (
                <div className="mb-4">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" placeholder="John Doe" />
                </div>
              )}

              <div className="mb-4">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="you@example.com" />
              </div>

              <div className="mb-4">
                <label className="form-label">Password</label>
                <input type="password" className="form-input" placeholder="••••••••" />
              </div>

              {type === 'register' && (
                <>
                  <div className="mb-4">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-input" placeholder="Confirm your password" />
                  </div>


                  
                </>
              )}

              <button type="submit" className="btn btn-primary w-full">
                {type === 'login' ? 'Login' : 'Register'}
              </button>

              <p className="text-center text-sm text-white/60 mt-4">
                {type === 'login' ? (
                  <>Don't have an account? <Link to="/auth/register" className="text-primary underline">Register</Link></>
                ) : (
                  <>Already have an account? <Link to="/auth/login" className="text-primary underline">Sign In</Link></>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
