import { useState, useEffect } from 'react'
import React from 'react'

import NFTCard from '../components/cards/NFTCard.jsx'


const Gallery = () => {
  const [filter, setFilter] = useState('all')
  const [layout, setLayout] = useState('grid')
  const [sort, setSort] = useState('trending')
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [nfts, setNfts] = useState([])

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      setNfts([
        {
          id: '1',
          title: 'Neon Dreams #42',
          creator: 'Alex Rivers',
          creatorAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
          image: 'https://images.pexels.com/photos/3052726/pexels-photo-3052726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          price: '2.5 ETH',
          likes: 432,
          category: 'illustration',
        },
        {
          id: '2',
          title: 'Digital Harmony',
          creator: 'Elena Morin',
          creatorAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
          image: 'https://images.pexels.com/photos/6447366/pexels-photo-6447366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          price: '1.8 ETH',
          likes: 367,
          category: '3d',
        },
        {
          id: '3',
          title: 'Cybernetic Landscape',
          creator: 'Marcus Wei',
          creatorAvatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100',
          image: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          price: '3.2 ETH',
          likes: 512,
          category: 'environment',
        },
        {
          id: '4',
          title: 'Neo Tokyo Streets',
          creator: 'Sasha Kim',
          creatorAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
          image: 'https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          price: '2.7 ETH',
          likes: 289,
          category: 'environment',
        },
        {
          id: '5',
          title: 'Digital Identity',
          creator: 'Jordan Taylor',
          creatorAvatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100',
          image: 'https://images.pexels.com/photos/3826678/pexels-photo-3826678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          price: '1.5 ETH',
          likes: 215,
          category: 'portrait',
        },
        {
          id: '6',
          title: 'Abstract Dimensions',
          creator: 'Maya Johnson',
          creatorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
          image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          price: '1.2 ETH',
          likes: 176,
          category: 'abstract',
        },
        {
          id: '7',
          title: 'Quantum Fragments',
          creator: 'David Chen',
          creatorAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
          image: 'https://images.pexels.com/photos/3594968/pexels-photo-3594968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          price: '1.9 ETH',
          likes: 243,
          category: 'abstract',
        },
        {
          id: '8',
          title: 'Digital Butterfly',
          creator: 'Nina Rodriguez',
          creatorAvatar: 'https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=100',
          image: 'https://images.pexels.com/photos/604672/pexels-photo-604672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          price: '1.4 ETH',
          likes: 198,
          category: 'illustration',
        },
        {
          id: '9',
          title: 'Future City',
          creator: 'Alex Rivers',
          creatorAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
          image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          price: '3.8 ETH',
          likes: 512,
          category: 'environment',
        },
      ])
      setIsLoading(false)
    }, 1000)
  }, [])

  // Filter NFTs based on category and search query
  const filteredNFTs = nfts.filter((nft) => {
    const matchesCategory = filter === 'all' || nft.category === filter
    const matchesSearch = nft.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nft.creator.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Sort NFTs based on selected sort option
  const sortedNFTs = [...filteredNFTs].sort((a, b) => {
    if (sort === 'trending') {
      return b.likes - a.likes
    } else if (sort === 'recent') {
      // In a real app, would sort by creation date
      return b.id - a.id
    } else if (sort === 'price-high') {
      return parseFloat(b.price) - parseFloat(a.price)
    } else if (sort === 'price-low') {
      return parseFloat(a.price) - parseFloat(b.price)
    }
    return 0
  })

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-background z-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold font-display leading-tight text-white">
              Creators <span className="text-primary animate-glow">Gallery</span>
            </h1>
            <p className="mt-6 text-xl text-accent-muted">
              Discover stunning digital creations and exclusive NFTs crafted by visionary creators across the globe.
            </p>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        {/* Search and Filters */}
        <div className="card-glow mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search NFTs or creators..."
                  className="form-input pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-accent-muted" />
                </div>
              </div>
            </div>

            {/* Sort */}
            <div className="w-full lg:w-48">
              <select
                className="form-input w-full"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="trending">Trending</option>
                <option value="recent">Recently Added</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="price-low">Price (Low to High)</option>
              </select>
            </div>

            {/* Layout Toggle */}
            <div className="flex space-x-2">
              <button
                className={`p-2 rounded ${layout === 'grid'
                    ? 'bg-primary/20 text-primary'
                    : 'bg-background-lighter text-accent-muted hover:text-white'
                  }`}
                onClick={() => setLayout('grid')}
                aria-label="Grid view"
              >
                <GridIcon className="h-5 w-5" />
              </button>
              <button
                className={`p-2 rounded ${layout === 'list'
                    ? 'bg-primary/20 text-primary'
                    : 'bg-background-lighter text-accent-muted hover:text-white'
                  }`}
                onClick={() => setLayout('list')}
                aria-label="List view"
              >
                <ListIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === 'all'
                ? 'bg-primary text-white shadow-neon'
                : 'bg-background-lighter text-accent-muted hover:text-white'
              }`}
            onClick={() => setFilter('all')}
          >
            All Categories
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === 'illustration'
                ? 'bg-primary text-white shadow-neon'
                : 'bg-background-lighter text-accent-muted hover:text-white'
              }`}
            onClick={() => setFilter('illustration')}
          >
            Illustrations
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === '3d'
                ? 'bg-primary text-white shadow-neon'
                : 'bg-background-lighter text-accent-muted hover:text-white'
              }`}
            onClick={() => setFilter('3d')}
          >
            3D Art
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === 'environment'
                ? 'bg-primary text-white shadow-neon'
                : 'bg-background-lighter text-accent-muted hover:text-white'
              }`}
            onClick={() => setFilter('environment')}
          >
            Environments
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === 'portrait'
                ? 'bg-primary text-white shadow-neon'
                : 'bg-background-lighter text-accent-muted hover:text-white'
              }`}
            onClick={() => setFilter('portrait')}
          >
            Portraits
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === 'abstract'
                ? 'bg-primary text-white shadow-neon'
                : 'bg-background-lighter text-accent-muted hover:text-white'
              }`}
            onClick={() => setFilter('abstract')}
          >
            Abstract
          </button>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="min-h-[400px] flex items-center justify-center">
            <div className="relative w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/30 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        {!isLoading && (
          <>
            {sortedNFTs.length === 0 ? (
              <div className="min-h-[200px] flex flex-col items-center justify-center text-center">
                <div className="p-4 bg-primary/20 rounded-full mb-4">
                  <SearchIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No NFTs Found</h3>
                <p className="text-accent-muted max-w-md">
                  We couldn't find any NFTs matching your search. Try adjusting your filters or search query.
                </p>
              </div>
            ) : (
              <div className={`grid gap-6 ${layout === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'grid-cols-1'
                }`}>
                {sortedNFTs.map((nft) => (
                  <NFTCard key={nft.id} {...nft} />
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 rounded-md bg-background-lighter text-accent-muted hover:text-white transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 rounded-md bg-primary/20 text-primary">
                  1
                </button>
                <button className="px-4 py-2 rounded-md bg-background-lighter text-accent-muted hover:text-white transition-colors">
                  2
                </button>
                <button className="px-4 py-2 rounded-md bg-background-lighter text-accent-muted hover:text-white transition-colors">
                  3
                </button>
                <button className="px-4 py-2 rounded-md bg-background-lighter text-accent-muted hover:text-white transition-colors">
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Featured Collection */}
      <section className="section">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30"></div>

          {/* Content */}
          <div className="relative glass-panel border-0 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold font-display text-white leading-tight">
                  Featured Collection: Neon Dreamscapes
                </h2>
                <p className="mt-4 text-accent-muted">
                  A limited collection of 50 unique digital artworks by renowned artist Alex Rivers.
                  Each piece captures the vibrant energy and futuristic aesthetics of a cyberpunk cityscape.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Alex Rivers"
                      className="w-12 h-12 rounded-full object-cover border border-white/20"
                    />
                    <div>
                      <p className="font-medium text-white">Created by Alex Rivers</p>
                      <p className="text-sm text-accent-muted">Released April 2025</p>
                    </div>
                  </div>
                </div>
                <div className="flex mt-8 flex-wrap gap-4">
                  <button className="btn-primary">
                    View Collection
                  </button>
                  <div className="bg-background-card backdrop-blur-sm py-2 px-4 rounded-full">
                    <span className="text-white">Floor Price: <span className="text-primary font-medium">4.2 ETH</span></span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Neon Dreamscape 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3052726/pexels-photo-3052726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Neon Dreamscape 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Neon Dreamscape 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden relative">
                  <img
                    src="https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Neon Dreamscape 4"
                    className="w-full h-full object-cover brightness-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">+46 more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="card-glow p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-6">
            Ready to Showcase Your Digital Art?
          </h2>
          <p className="text-accent-muted mb-8 max-w-2xl mx-auto">
            Join Creatosland to share your NFTs with our growing community of collectors and enthusiasts.
            Start selling your digital creations and build your reputation as a creator.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/auth/register" className="btn-primary">
              Join as Creator
            </a>
            <a href="/contact" className="btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

// Icons
const SearchIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const GridIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
)

const ListIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
)

export default Gallery