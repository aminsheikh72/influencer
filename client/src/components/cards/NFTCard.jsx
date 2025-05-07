import { useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'


const NFTCard = ({ id, title, creator, creatorAvatar, image, price, likes }) => {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)

  const handleLike = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (liked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }

    setLiked(!liked)
  }

  return (
    <div className="card-glow h-full group">
      {/* Image */}
      <div className="aspect-square rounded-lg overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
          <div className="flex items-center mt-1">
            <img
              src={creatorAvatar}
              alt={creator}
              className="w-5 h-5 rounded-full mr-2"
            />
            <p className="text-sm text-accent-muted">by {creator}</p>
          </div>
        </div>
        <div className="bg-primary/20 px-3 py-1 rounded-full border border-primary/30">
          <span className="text-primary text-sm font-medium">{price}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
        <button
          onClick={handleLike}
          className="flex items-center gap-1.5 text-accent-muted hover:text-primary transition-colors"
        >
          {liked ? (
            <HeartFilledIcon className="w-5 h-5 text-primary" />
          ) : (
            <HeartIcon className="w-5 h-5" />
          )}
          <span className="text-sm">{likeCount}</span>
        </button>
        <Link to={`/creators/${id}`}className="block">
          <button className="btn-outline !py-1.5 !px-4 text-xs">
            View 
          </button>
        </Link>
      </div>
    </div>
  )
}

const HeartIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

const HeartFilledIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

export default NFTCard