import { useState } from 'react'
import { Link } from 'react-router-dom'
import CreatorCard from '../components/cards/CreatorCard.jsx'
import NFTCard from '../components/cards/NFTCard.jsx'
import heroImage from "../assets/heroimage.png"
import React from 'react'


const Home = () => {
  const [activeTab, setActiveTab] = useState('trending')

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden md:pt-16 pt-16">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-background z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-tight text-white">
                Create, <span className="text-primary ">Connect</span>,
                Monetize
              </h1>
              <p className="mt-6 text-xl text-accent-muted max-w-xl">
                Join the next generation of digital creators and build your audience in the metaverse.
                Showcase your art, connect with fans, and turn your passion into profit.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/auth/register" className="btn-primary">
                  Join Creatosland
                </Link>
                <Link to="/gallery" className="btn-outline">
                  Explore Gallery
                </Link>
              </div>

              <div className="mt-16 flex items-center gap-8">
                <div>
                  <p className="text-3xl font-bold text-white">20K+</p>
                  <p className="text-accent-muted">Creators</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">100K+</p>
                  <p className="text-accent-muted">Digital Assets</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">$10M+</p>
                  <p className="text-accent-muted">Revenue Generated</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main image floating effect */}
                <div className="absolute inset-0 animate-float">
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
                    <img
                      src={heroImage}
                      alt="Digital creator in virtual space"
                      className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="glass-panel p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-bold text-white">Digital Dreamscape</h3>
                            <p className="text-accent-muted text-sm">by CyberArtist</p>
                          </div>
                          <div className="bg-primary/20 px-3 py-1 rounded-full border border-primary/30">
                            <span className="text-primary text-sm font-medium">3.5 ETH</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating decoration elements */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-secondary/30 rounded-full filter blur-md animate-pulse"></div>
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary/30 rounded-full filter blur-md animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Creators Section */}
      <section className="section">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="heading">Trending Creators</h2>
            <p className="text-accent-muted max-w-2xl">
              Discover the most influential digital artists, designers, and content creators making waves in the metaverse.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link to="/leaderboard" className="btn-outline text-sm">
              View Leaderboard
            </Link>
          </div>
        </div>

         <div >
         
<CreatorCard/>


        </div> 
      </section>

      {/* Featured NFTs Section */}
      <section className="section">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="heading">Featured Digital Art</h2>
            <p className="text-accent-muted max-w-2xl">
              Explore the most exclusive digital art pieces and NFTs created by top talents in Creatosland.
            </p>
          </div>
          <div className="flex space-x-2 mt-6 md:mt-0">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'trending'
                ? 'bg-primary text-white shadow-neon'
                : 'bg-background-lighter text-accent-muted hover:text-white'
                }`}
              onClick={() => setActiveTab('trending')}
            >
              Trending
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'recent'
                ? 'bg-primary text-white shadow-neon'
                : 'bg-background-lighter text-accent-muted hover:text-white'
                }`}
              onClick={() => setActiveTab('recent')}
            >
              Recent
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'popular'
                ? 'bg-primary text-white shadow-neon'
                : 'bg-background-lighter text-accent-muted hover:text-white'
                }`}
              onClick={() => setActiveTab('popular')}
            >
              Popular
            </button>
          </div>
        </div>

          {/*  Card container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NFTCard />
        
          {/* <CircleText/> */}
        </div>
           {/*  Card container end */}

        <div className="mt-12 text-center">
          <Link to="/gallery" className="btn-outline">
            View All Artworks
          </Link>
        </div>
      </section>

      {/* Join as Creator CTA */}
      <section className="section">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30"></div>

          {/* Content */}
          <div className="relative glass-panel border-0 p-12 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-white leading-tight">
                  Ready to Start Your Creator Journey?
                </h2>
                <p className="mt-6 text-lg text-accent-muted max-w-xl">
                  Join thousands of creators who are building their brand,
                  growing their audience, and monetizing their digital content on Creatosland.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-1 bg-primary/20 rounded-full">
                      <CheckIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Create Your Portfolio</h3>
                      <p className="text-accent-muted mt-1">Showcase your best work in our NFT gallery</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-1 bg-primary/20 rounded-full">
                      <CheckIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Grow Your Audience</h3>
                      <p className="text-accent-muted mt-1">Connect with fans and other creators</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-1 bg-primary/20 rounded-full">
                      <CheckIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Monetize Your Work</h3>
                      <p className="text-accent-muted mt-1">Sell your digital creations as NFTs</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <Link to="/auth/register" className="btn-primary">
                    Become a Creator
                  </Link>
                </div>
              </div>

              <div className="relative">
                <img
                  src={heroImage}
                  alt="Digital creator"
                  className="w-full rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 p-4 glass-panel shadow-neon">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/20 rounded-full">
                      <StarIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-accent-muted">Average creator earnings</p>
                      <p className="text-xl font-bold text-white">$5,200 / month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Icons
const CheckIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const StarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
)

export default Home