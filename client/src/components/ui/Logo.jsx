import React from 'react'


const Logo = () => {
  return (
    <div className="relative w-8 h-8">
      <div className="absolute inset-0 bg-primary rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-gradient-to-br from-primary to-secondary-dark rounded-sm transform rotate-45"></div>
      </div>
    </div>
  )
}

export default Logo