import { Link } from 'react-router-dom'
import Logo from '../ui/Logo.jsx'
import React from 'react'


const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Programs',
      links: [
        { name: 'Beginner', href: '#' },
        { name: 'Pro', href: '#' },
        { name: 'Elite', href: '#' },
        { name: 'Enterprise', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/about' },
        { name: 'Tutorials', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Licenses', href: '#' },
      ],
    },
  ]
  
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/amin-sheikh-1a885a328', icon: LinkedInIcon },
    { name: 'Instagram', href: 'https://www.instagram.com/vlogstack?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: InstagramIcon },
    { name: 'YouTube', href: 'https://youtube.com/shorts/xp5_UMmABms?si=-8FFoT9LDycoam8R', icon: YouTubeIcon },
  ]

  return (
    <footer className="bg-background-lighter  border-t-2 border-red-800 rounded-t-[60px] mt-10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center">
              <Logo />
              <span className="ml-2 text-xl font-bold font-display text-white">
                Creatos<span className="text-primary">land</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-accent-muted">
              The ultimate platform for digital creators to showcase their work, connect with fans, and monetize their content in the metaverse.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-accent-muted hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer links */}
          {footerLinks.map((column) => (
            <div key={column.title} className="col-span-1">
              <h3 className="text-sm font-medium text-white mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-accent-muted hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className=' md:text-9xl text-5xl font-black text-start pt-10 border-t border-white/10 mt-5'>
          CreatorsLand
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-accent-muted">
            &copy; {currentYear} Creatosland. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <button className="text-xs text-accent-muted hover:text-primary transition-colors">
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Social icons


const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const LinkedInIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-2.5v-9h2.5v9zm-1.25-10.27c-.83 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm13 10.27h-2.5v-4.75c0-1.14-.41-1.92-1.45-1.92-.79 0-1.27.53-1.48 1.04-.07.17-.08.41-.08.65v5h-2.5s.03-8.13 0-9h2.5v1.28c.33-.51.93-1.23 2.27-1.23 1.66 0 2.9 1.08 2.9 3.41v5.54z"/>
  </svg>
);




const YouTubeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

export default Footer