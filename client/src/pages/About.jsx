import { Link } from 'react-router-dom'
import AmanImage from "../assets/Aman.jpg"
import AminImage from "../assets/Amin.jpg"
import shruti from "../assets/shrutii.jpeg"
import shubham from "../assets/shubham.jpg"
import samm from "../assets/samm.jpg"
import Swati from '../assets/swati.jpeg'
import React from 'react'


const About = () => {
  const team = [
    {
      name: 'Aman Sheikh',
      role: 'UI Director',
      image: AmanImage,
      bio: 'UI Leader & Frontend Developer. Passionate about crafting intuitive, responsive interfaces with a strong focus on user experience and modern design principles.',
    },
    
    {
      name: 'Amin Sheikh',
      role: 'Logic Director',
      image: AminImage,
      bio: 'Blockchain expert and former lead engineer at a major tech company. Leads the technical infrastructure of Creatosland.',
    },
    {
      name: 'Shruti Gaud',
      role: 'Admin Director',
      image: shruti ,
      bio: 'Award-winning digital artist and curator with over 10 years of experience in the NFT space.',
    },
    {
      name: 'Shubham Soni',
      role: 'Assistant of Admin Director',
      image:  shubham,
      bio: 'Community builder and strategist who has helped launch several successful creator platforms.',
    },

    {
      name: 'Samruddhi Kadam',
      role: 'Authentication Director',
      image:  samm,
      bio: 'Community builder and strategist who has helped launch several successful creator platforms.',
    },
    {
      name: 'Swati Kushwaha',
      role: 'Management  Director',
      image:  Swati,
      bio: 'Community builder and strategist who has helped launch several successful creator platforms.',
    },
  ]
  
  const milestones = [
    {
      year: '2023',
      title: 'Creatosland Launches',
      description: 'Platform officially launches with 100 founding creators.'
    },
    {
      year: '2024',
      title: 'Reached 10,000 Creators',
      description: 'Milestone of 10,000 active creators and 50,000 digital assets.'
    },
    {
      year: '2024',
      title: 'Creator Fund Established',
      description: '$5M fund launched to support emerging digital artists and creators.'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanded to 50+ countries with support for multiple languages and payment methods.'
    },
  ]

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
              Our <span className="text-primary animate-glow">Story</span>
            </h1>
            <p className="mt-6 text-xl text-accent-muted">
              We're building the future of digital creation and ownership in the metaverse.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-square max-w-md">
              <img
                src="https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Creatosland mission"
                className="rounded-2xl object-cover w-full h-full"
              />
              <div className="absolute -bottom-6 -right-6 p-6 glass-panel shadow-neon">
                <p className="text-primary text-xl font-bold">2025</p>
                <p className="text-white text-sm">Established</p>
              </div>
            </div>
            <div className="absolute -z-10 -top-8 -left-8 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
          </div>
          
          <div>
            <h2 className="heading">Our Mission</h2>
            <p className="text-lg text-accent-muted mb-6">
              Creatosland exists to empower the next generation of digital creators with the tools, 
              community, and marketplace they need to thrive in the new creative economy.
            </p>
            <p className="text-lg text-accent-muted mb-6">
              We believe that creators should have complete ownership of their work and direct 
              relationships with their audiences. By leveraging blockchain technology, we're 
              building a more equitable ecosystem for digital artists, designers, musicians, and 
              content creators of all kinds.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="card bg-primary/10 border border-primary/30 hover:shadow-neon transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <VisionIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-white">Our Vision</h3>
                </div>
                <p className="mt-4 text-accent-muted">
                  A world where digital creators can build sustainable careers on their own terms.
                </p>
              </div>
              
              <div className="card bg-secondary/10 border border-secondary/30 hover:shadow-neon-blue transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-secondary/20 rounded-full">
                    <ValuesIcon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-bold text-white">Our Values</h3>
                </div>
                <p className="mt-4 text-accent-muted">
                  Creator-first, transparency, innovation, community, and accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Milestones Section */}
      <section className="section">
        <div className="text-center mb-16">
          <h2 className="heading">Our Journey</h2>
          <p className="text-accent-muted max-w-2xl mx-auto">
            Key milestones in our mission to empower digital creators around the world.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-white/10 z-0"></div>
          
          <div className="relative z-10">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`mb-12 flex items-center ${
                  index % 2 === 0 
                    ? 'md:flex-row' 
                    : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block w-1/2"></div>
                
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 bg-primary rounded-full w-6 h-6 z-10 shadow-neon"></div>
                
                <div className="pl-10 md:pl-0 md:w-1/2 md:px-8">
                  <div className="card-glow">
                    <div className="flex items-center mb-3">
                      <span className="text-xl font-bold text-primary mr-3">{milestone.year}</span>
                      <h3 className="font-bold text-white">{milestone.title}</h3>
                    </div>
                    <p className="text-accent-muted">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section">
        <div className="text-center mb-16">
          <h2 className="heading">Meet Our Team</h2>
          <p className="text-accent-muted max-w-2xl mx-auto">
            Our diverse team brings together expertise from art, technology, and business
            to build the best platform for creators.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="card-glow backdrop-blur-lg group">
              <div className="aspect-square rounded-lg overflow-hidden mb-4 border border-white/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-white">{member.name}</h3>
              <p className="text-primary text-sm font-black">{member.role}</p>
              <p className="mt-2 text-accent-muted text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="section">
        <div className="card-glow p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-6">
            Ready to Join the Creatosland Community?
          </h2>
          <p className="text-accent-muted mb-8">
            Whether you're a creator looking to share your work or a collector interested in digital art,
            there's a place for you in our ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/auth/register" className="btn-primary">
              Create an Account
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Icons
const VisionIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
)

const ValuesIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

export default About