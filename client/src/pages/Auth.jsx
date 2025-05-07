import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom'
import React from 'react'


const Auth = () => {
  const { type } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const planFromQuery = queryParams.get('plan')
  
  const [authType, setAuthType] = useState(type || 'login')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    plan: planFromQuery || 'beginner',
    agreeTerms: false,
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  useEffect(() => {
    setAuthType(type)
  }, [type])
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }
  
  const validate = () => {
    const newErrors = {}
    
    if (authType === 'register') {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required'
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password'
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
      
      if (!formData.agreeTerms) {
        newErrors.agreeTerms = 'You must agree to the terms and conditions'
      }
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    return newErrors
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate authentication
    setTimeout(() => {
      setIsSubmitting(false)
      navigate('/')
    }, 1500)
  }
  
  const toggleAuthType = () => {
    const newType = authType === 'login' ? 'register' : 'login'
    setAuthType(newType)
    navigate(`/auth/${newType}${location.search}`)
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left column (image) */}
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
                {authType === 'login' 
                  ? 'Welcome Back to Creatosland' 
                  : 'Join the Creator Revolution'}
              </h1>
              <p className="text-white/80">
                {authType === 'login'
                  ? 'Sign in to access your creator dashboard, manage your digital assets, and connect with your audience.'
                  : 'Create, share, and monetize your digital content with our powerful platform built for the creator economy.'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Right column (form) */}
        <div className="flex items-center justify-center p-4 sm:p-8">
          <div className="card-glow max-w-md w-full p-6 sm:p-10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">
                {authType === 'login' ? 'Sign In' : 'Create Account'}
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
            
            <form onSubmit={handleSubmit}>
              {authType === 'register' && (
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-input ${errors.name ? 'border-error' : ''}`}
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="mt-1 text-sm text-error">{errors.name}</p>}
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${errors.email ? 'border-error' : ''}`}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="mt-1 text-sm text-error">{errors.email}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`form-input ${errors.password ? 'border-error' : ''}`}
                  placeholder={authType === 'login' ? '••••••••' : 'Min. 6 characters'}
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="mt-1 text-sm text-error">{errors.password}</p>}
              </div>
              
              {authType === 'register' && (
                <>
                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className={`form-input ${errors.confirmPassword ? 'border-error' : ''}`}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    {errors.confirmPassword && <p className="mt-1 text-sm text-error">{errors.confirmPassword}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label className="form-label">Select Plan</label>
                    <div className="grid grid-cols-3 gap-3 mt-2">
                      <button
                        type="button"
                        className={`text-center p-3 rounded-lg border ${
                          formData.plan === 'beginner'
                            ? 'border-primary text-primary bg-primary/10'
                            : 'border-white/20 text-accent-muted hover:border-white/40'
                        } transition-colors`}
                        onClick={() => handleChange({ target: { name: 'plan', value: 'beginner' } })}
                      >
                        <span className="text-sm font-medium">Beginner</span>
                        <p className="text-xs mt-1">Free</p>
                      </button>
                      <button
                        type="button"
                        className={`text-center p-3 rounded-lg border ${
                          formData.plan === 'pro'
                            ? 'border-primary text-primary bg-primary/10'
                            : 'border-white/20 text-accent-muted hover:border-white/40'
                        } transition-colors`}
                        onClick={() => handleChange({ target: { name: 'plan', value: 'pro' } })}
                      >
                        <span className="text-sm font-medium">Pro</span>
                        <p className="text-xs mt-1">$29.99/mo</p>
                      </button>
                      <button
                        type="button"
                        className={`text-center p-3 rounded-lg border ${
                          formData.plan === 'elite'
                            ? 'border-primary text-primary bg-primary/10'
                            : 'border-white/20 text-accent-muted hover:border-white/40'
                        } transition-colors`}
                        onClick={() => handleChange({ target: { name: 'plan', value: 'elite' } })}
                      >
                        <span className="text-sm font-medium">Elite</span>
                        <p className="text-xs mt-1">$99.99/mo</p>
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        className="mt-1 rounded border-white/20 text-primary focus:ring-primary/50 bg-background-lighter"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                      />
                      <span className="ml-2 text-sm text-accent-muted">
                        I agree to the 
                        <a href="#" className="text-primary ml-1 hover:underline">Terms of Service</a>
                        {' '}and{' '}
                        <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                      </span>
                    </label>
                    {errors.agreeTerms && <p className="mt-1 text-sm text-error">{errors.agreeTerms}</p>}
                  </div>
                </>
              )}
              
              {authType === 'login' && (
                <div className="flex justify-end mb-6">
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}
              
              <button
                type="submit"
                className={`btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting 
                  ? (authType === 'login' ? 'Signing in...' : 'Creating account...')
                  : (authType === 'login' ? 'Sign In' : 'Create Account')}
              </button>
              
              <div className="mt-6 text-center">
                <p className="text-accent-muted text-sm">
                  {authType === 'login' 
                    ? "Don't have an account?" 
                    : "Already have an account?"}
                  <button
                    type="button"
                    className="text-primary ml-1 hover:underline"
                    onClick={toggleAuthType}
                  >
                    {authType === 'login' ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>
            </form>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <p className="text-sm text-accent-muted mb-4">Or continue with</p>
                <div className="flex justify-center space-x-4">
                  <button className="p-2 bg-background-lighter rounded-full hover:bg-white/10 transition-colors">
                    <GoogleIcon className="w-5 h-5 text-accent" />
                  </button>
                  <button className="p-2 bg-background-lighter rounded-full hover:bg-white/10 transition-colors">
                    <AppleIcon className="w-5 h-5 text-accent" />
                  </button>
                  <button className="p-2 bg-background-lighter rounded-full hover:bg-white/10 transition-colors">
                    <TwitterIcon className="w-5 h-5 text-accent" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Icons
const GoogleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
  </svg>
)

const AppleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M16.462 14.832c0 3.528 3.105 4.656 3.131 4.669-.027.074-.48 1.613-1.584 3.197-0.959 1.387-1.956 2.773-3.517 2.8-1.535 0.026-2.026-0.902-3.78-0.902-1.748 0-2.293 0.876-3.743 0.935-1.507 0.058-2.649-1.496-3.628-2.873-1.968-2.822-3.477-7.968-1.445-11.443 1.005-1.707 2.807-2.788 4.755-2.813 1.489-0.027 2.888 0.988 3.797 0.988 0.901 0 2.597-1.22 4.378-1.038 0.747 0.034 2.835 0.301 4.177 2.253-0.108 0.065-2.493 1.444-2.462 4.308zM14.865 4.586c0.786-0.944 1.319-2.256 1.175-3.57-1.14 0.046-2.514 0.756-3.33 1.7-0.73 0.836-1.373 2.177-1.197 3.461 1.266 0.094 2.567-0.635 3.353-1.591z"/>
  </svg>
)

const TwitterIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
)

export default Auth