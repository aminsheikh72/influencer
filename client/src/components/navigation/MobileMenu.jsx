import { Link } from 'react-router-dom'
import React from 'react'


const MobileMenu = ({ setMobileMenuOpen }) => {
  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ]

  return (
    <div className="md:hidden bg-background-lighter backdrop-blur-xl border-t border-white/10 absolute w-full left-0 z-40 shadow-lg animate-[slideDown_0.3s_ease-in-out]">
      <div className="px-4 pt-2 pb-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block py-3 px-4 text-base font-medium text-accent-muted hover:text-primary hover:bg-background-card rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.title}
          </Link>
        ))}
        <div className="pt-4 border-t border-white/10 mt-4">
          <Link
            to="/login"
            className="block py-3 px-4 text-sm font-medium text-center btn-primary w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sign In
          </Link>
        
        </div>
      </div>
    </div>
  )
}

export default MobileMenu