import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import React from 'react'

const CreatorDetail = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const [loading, setLoading] = useState(true)
  const [creator, setCreator] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    // Simulate API call to fetch creator data
    setTimeout(() => {
      setCreator({
        id,
        name: 'Alex Rivers',
        username: '@alex_digital',
        bio: 'Award-winning 3D artist and NFT creator. Specializing in futuristic landscapes and abstract digital art. Based in Tokyo, Japan.',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        cover: 'https://images.pexels.com/photos/3109168/pexels-photo-3109168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        followers: 45200,
        following: 1240,
        sales: 289,
        verified: true,
        category: '3D Artist',
        joined: 'May 2023',
        socialLinks: {
          twitter: 'https://twitter.com',
          instagram: 'https://instagram.com',
          website: 'https://alexrivers.art',
        },
        stats: {
          totalSales: '432.5 ETH',
          avgSalePrice: '3.2 ETH',
          highestSale: '18.5 ETH',
          collections: 12,
          totalNFTs: 86,
        },
        featured: [
          {
            id: '1',
            title: 'Neon Dreams #42',
            image: 'https://images.pexels.com/photos/3052726/pexels-photo-3052726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            price: '3.2 ETH',
          },
          {
            id: '2',
            title: 'Digital Harmony',
            image: 'https://images.pexels.com/photos/6447366/pexels-photo-6447366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            price: '2.8 ETH',
          },
          {
            id: '3',
            title: 'Cybernetic Landscape',
            image: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            price: '4.5 ETH',
          },
        ],
        reviews: [
          {
            id: '1',
            user: 'Sarah K.',
            avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
            rating: 5,
            date: '2 weeks ago',
            comment: 'Incredible artist! The detail in Alex\'s work is absolutely stunning. The NFT I purchased has become the centerpiece of my digital collection.',
          },
          {
            id: '2',
            user: 'Michael T.',
            avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100',
            rating: 4,
            date: '1 month ago',
            comment: 'Great communication throughout the custom commission process. The final piece exceeded my expectations.',
          },
          {
            id: '3',
            user: 'Elena M.',
            avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
            rating: 5,
            date: '2 months ago',
            comment: 'One of the most innovative digital artists I\'ve encountered. Alex pushes the boundaries of what\'s possible in the digital art space.',
          },
        ],
      })
      setLoading(false)
    }, 1000)
  }, [id])

  // Format number with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/30 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Cover Image */}
      <div className="relative h-60 sm:h-80 md:h-96 w-full overflow-hidden">
        <img
          src={creator.cover}
          alt={`${creator.name}'s cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
      </div>

      {/* Creator Profile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Details */}
          <div className="lg:col-span-1">
            <div className="card-glow pb-8">
              {/* Avatar */}
              <div className="flex justify-center -mt-20 mb-6">
                <div className="relative">
                  <div className="w-36 h-36 rounded-full border-4 border-background-card overflow-hidden shadow-lg">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {creator.verified && (
                    <div className="absolute bottom-2 right-2 bg-primary rounded-full p-1.5 border-2 border-background-card">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </div>

              {/* Creator Info */}
              <div className="text-center px-6">
                <h1 className="text-2xl font-bold text-white">{creator.name}</h1>
                <p className="text-accent-muted">{creator.username}</p>
                <div className="inline-block px-3 py-1 bg-primary/20 rounded-full text-sm font-medium mt-2 text-primary">
                  {creator.category}
                </div>
                <p className="mt-4 text-accent-muted">{creator.bio}</p>

                <div className="mt-6 flex justify-center space-x-4">
                  <a
                    href={creator.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background-lighter rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <TwitterIcon className="w-5 h-5 text-accent-muted hover:text-primary transition-colors" />
                  </a>
                  <a
                    href={creator.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background-lighter rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <InstagramIcon className="w-5 h-5 text-accent-muted hover:text-primary transition-colors" />
                  </a>
                  <a
                    href={creator.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background-lighter rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <GlobeIcon className="w-5 h-5 text-accent-muted hover:text-primary transition-colors" />
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-8 px-2">
                  <div className="text-center p-3 bg-background-lighter rounded-lg">
                    <p className="text-lg font-bold text-white">{formatNumber(creator.followers)}</p>
                    <p className="text-xs text-accent-muted">Followers</p>
                  </div>
                  <div className="text-center p-3 bg-background-lighter rounded-lg">
                    <p className="text-lg font-bold text-white">{formatNumber(creator.following)}</p>
                    <p className="text-xs text-accent-muted">Following</p>
                  </div>
                  <div className="text-center p-3 bg-background-lighter rounded-lg">
                    <p className="text-lg font-bold text-white">{formatNumber(creator.sales)}</p>
                    <p className="text-xs text-accent-muted">Sales</p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <button className="btn-primary w-full">
                    Follow
                  </button>
                  <button className="btn-outline w-full">
                    Book
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-accent-muted text-sm">
                    Member since {creator.joined}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tabs and Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="card-glow mb-6">
              <div className="flex border-b border-white/10">
                <button
                  className={`px-4 py-3 text-sm font-medium ${activeTab === 'overview'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-accent-muted hover:text-white'
                    }`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button
                  className={`px-4 py-3 text-sm font-medium ${activeTab === 'stats'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-accent-muted hover:text-white'
                    }`}
                  onClick={() => setActiveTab('stats')}
                >
                  Stats
                </button>
                <button
                  className={`px-4 py-3 text-sm font-medium ${activeTab === 'reviews'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-accent-muted hover:text-white'
                    }`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <>
                  <div className="card-glow">
                    <h2 className="text-xl font-bold text-white mb-6">Featured Artworks</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {creator.featured.map((artwork) => (
                        <div key={artwork.id} className="group relative">
                          <div className="aspect-square overflow-hidden rounded-lg">
                            <img
                              src={artwork.image}
                              alt={artwork.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background-card to-transparent">
                            <p className="font-medium text-white text-sm">{artwork.title}</p>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-primary text-xs">{artwork.price}</span>
                              <button className="text-xs bg-primary/20 hover:bg-primary/40 text-primary px-2 py-1 rounded-full transition-colors">
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <button className="btn-outline text-sm">
                        View All Artworks
                      </button>
                    </div>
                  </div>

                  <div className="card-glow">
                    <h2 className="text-xl font-bold text-white mb-6">About {creator.name}</h2>
                    <p className="text-accent-muted">
                      Alex Rivers is a pioneering digital artist who has been at the forefront of the NFT revolution since its inception. With a background in traditional fine arts and 3D modeling, Alex brings a unique perspective to digital creation that bridges the gap between conventional artistry and cutting-edge technology.
                    </p>
                    <p className="text-accent-muted mt-4">
                      Based in Tokyo, Japan, his work is heavily influenced by the city's blend of traditional culture and futuristic aesthetics. His signature style combines vibrant neon elements with intricate architectural structures, creating immersive digital landscapes that invite viewers to explore new realms of possibility.
                    </p>
                    <p className="text-accent-muted mt-4">
                      When not creating, Alex teaches digital art workshops and actively contributes to the growth of the creator community through mentorship programs and collaborative projects.
                    </p>
                  </div>
                </>
              )}

              {/* Stats Tab */}
              {activeTab === 'stats' && (
                <div className="card-glow">
                  <h2 className="text-xl font-bold text-white mb-6">Creator Stats</h2>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-background-lighter p-4 rounded-lg">
                      <p className="text-accent-muted text-xs">Total Sales</p>
                      <p className="text-2xl font-bold text-white mt-1">{creator.stats.totalSales}</p>
                    </div>
                    <div className="bg-background-lighter p-4 rounded-lg">
                      <p className="text-accent-muted text-xs">Avg Sale Price</p>
                      <p className="text-2xl font-bold text-white mt-1">{creator.stats.avgSalePrice}</p>
                    </div>
                    <div className="bg-background-lighter p-4 rounded-lg">
                      <p className="text-accent-muted text-xs">Highest Sale</p>
                      <p className="text-2xl font-bold text-white mt-1">{creator.stats.highestSale}</p>
                    </div>
                    <div className="bg-background-lighter p-4 rounded-lg">
                      <p className="text-accent-muted text-xs">Total NFTs</p>
                      <p className="text-2xl font-bold text-white mt-1">{creator.stats.totalNFTs}</p>
                    </div>
                  </div>

                  <h3 className="font-medium text-white mt-8 mb-4">Sales History (Last 6 Months)</h3>

                  {/* Sales Chart */}
                  <div className="bg-background-lighter rounded-lg p-4 h-64 flex items-end space-x-2">
                    {[0.3, 0.5, 0.7, 0.4, 0.9, 0.6].map((height, index) => (
                      <div key={index} className="flex-1 flex items-end">
                        <div
                          className="w-full bg-primary/20 hover:bg-primary/40 transition-colors rounded-t-sm"
                          style={{ height: `${height * 100}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-accent-muted">
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                  </div>

                  <h3 className="font-medium text-white mt-8 mb-4">Collections</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-background-lighter rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <CollectionIcon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="ml-3 text-white">Neon Dreams Series</span>
                      </div>
                      <div className="text-accent-muted text-sm">42 items</div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background-lighter rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <CollectionIcon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="ml-3 text-white">Tokyo Nights</span>
                      </div>
                      <div className="text-accent-muted text-sm">18 items</div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background-lighter rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <CollectionIcon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="ml-3 text-white">Future Landscapes</span>
                      </div>
                      <div className="text-accent-muted text-sm">26 items</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div className="card-glow">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Reviews & Feedback</h2>
                    <div className="flex items-center">
                      <div className="flex">
                        <StarIcon className="text-primary w-5 h-5" />
                        <StarIcon className="text-primary w-5 h-5" />
                        <StarIcon className="text-primary w-5 h-5" />
                        <StarIcon className="text-primary w-5 h-5" />
                        <StarHalfIcon className="text-primary w-5 h-5" />
                      </div>
                      <span className="text-white ml-2">4.7</span>
                      <span className="text-accent-muted ml-1">({creator.reviews.length})</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {creator.reviews.map((review) => (
                      <div key={review.id} className="pb-6 border-b border-white/10 last:border-0">
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <img
                              src={review.avatar}
                              alt={review.user}
                              className="w-10 h-10 rounded-full object-cover mr-3"
                            />
                            <div>
                              <p className="font-medium text-white">{review.user}</p>
                              <p className="text-accent-muted text-xs">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`w-4 h-4 ${i < review.rating ? 'text-primary' : 'text-accent-muted'
                                  }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-accent-muted mt-3">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <button className="btn-outline text-sm">
                      Load More Reviews
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Icons
const CheckIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const TwitterIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
)

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const GlobeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const StarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
)

const StarHalfIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
  </svg>
)

const CollectionIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
)

export default CreatorDetail