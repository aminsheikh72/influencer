import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Logo from '../ui/Logo';
import MobileMenu from './MobileMenu';
import { logOutUser } from '../../features/auth/authSlice';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogOut = () => {
    dispatch(logOutUser());
    toast.success('User Logout', {
      position: 'top-center',
      theme: 'dark',
    });
    navigate("/")
  };

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-background-lighter backdrop-blur-lg shadow-md py-2'
      : 'bg-transparent py-4'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo />
              <span className="ml-2 text-xl font-bold font-display text-white">
                Creatos<span className="text-primary">land</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks location={location} />
          </div>

          {/* User Actions */}

          <div className="flex items-center space-x-2 ">
            {/* <Link
              to="/admin"
              className="hidden sm:flex btn-outline text-sm rounded-full"
            >
              Admin
            </Link> */}

            {/* <Link
              to="/auth/login"
              className="hidden sm:flex btn-outline text-sm rounded-full"
            >
              Log In
            </Link>
            <Link
              to="/Register "
              className="hidden sm:flex btn-outline text-sm rounded-full"
            >
              Register
            </Link> */}

          <div className="flex items-center space-x-2">
            {!user && (
              <>
                <Link
                  to="/login"
                  className="hidden sm:flex btn-outline text-sm rounded-full"
                >
                  Log In
                </Link>
               
              </>
            )}

            {user && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors duration-200"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  <UserIcon className="w-5 h-5" />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-background-lighter rounded-md shadow-lg py-1 z-50 border border-accent-muted/20 backdrop-blur-lg">
                    <div className="px-4 py-3 border-b border-accent-muted/10">
                      <p className="text-sm text-white capitalize">{user.name}</p>
                      <p className="text-sm font-medium text-primary truncate">
                        {user.email}
                      </p>
                    </div>
                    {user.isAdmin ? (
                    <>
                        <Link
                        to="/admin"
                        className="block px-4 py-2 text-sm text-accent-muted hover:text-white hover:bg-accent-muted/10"
                      >
                        Admin
                      </Link>
                        <Link
                        to="/my-bookings"
                        className="block px-4 py-2 text-sm text-accent-muted hover:text-white hover:bg-accent-muted/10"
                      >
                        My Bookings
                      </Link>
                    </>
                    ) : (
                    <>
                       
                        <Link
                        to="/my-bookings"
                        className="block px-4 py-2 text-sm text-accent-muted hover:text-white hover:bg-accent-muted/10"
                      >
                        My Bookings
                      </Link>
                    </>
                    )}
                    <div className="border-t border-accent-muted/10 mt-1"></div>
                    <button
                      onClick={handleLogOut}
                      className="block w-full text-left px-4 py-2 text-sm text-accent-muted hover:text-white hover:bg-accent-muted/10"
                    >
                      LogOut
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-accent-muted hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />}
    </nav>
  );
};

const NavLinks = ({ location }) => {
  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`text-md font-black transition-colors duration-300 hover:text-primary ${
            location.pathname === item.path ? 'text-primary' : 'text-accent-muted'
          }`}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
};

const MenuIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

export default Navbar;
