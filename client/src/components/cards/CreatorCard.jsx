import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'


const CreatorCard = ({ id, name, username, avatar, cover, followers, category, verified }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // Format followers count to k/m format
  const formatFollowers = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M'
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K'
    } else {
      return count
    }
  }



  return (
    <Link to={`/creators/${id}`} className="block">
      <div className="card-glow h-full group">
        {/* Cover image */}
        <div className="h-32 rounded-t-lg overflow-hidden -mx-6 -mt-6">
          <img
            src={cover}
            alt={`${name}'s cover`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Avatar */}
        <div className="flex justify-center -mt-10">
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-4 border-background-card overflow-hidden">
              <img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            {verified && (
              <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1 border-2 border-background-card">
                <CheckIcon className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
        </div>

        {/* Creator info */}
        <div className="mt-4 text-center">
          <h3 className="font-bold text-white group-hover:text-primary transition-colors">{name}</h3>
          <p className="text-accent-muted text-sm">{username}</p>
          <div className="inline-block px-3 py-1 bg-background-lighter rounded-full text-xs font-medium mt-2">
            {category}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-accent-muted">Followers</p>
              <p className="font-medium text-white">{formatFollowers(followers)}</p>
            </div>
            <button className="btn-outline !py-1.5 !px-4 text-xs">
              Follow
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

const CheckIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

export default CreatorCard