import { Link } from 'react-router-dom'
import React from 'react'


const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="text-[120px] font-bold text-primary leading-none animate-glow">404</div>
        <h1 className="text-3xl font-bold text-white mt-4">Page Not Found</h1>
        <p className="text-accent-muted mt-4 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound