import React from 'react'

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className='flex flex-col items-center justify-between w-72 h-96 bg-amber-50 rounded-lg p-6 shadow-md text-center space-y-4'>
      <img className='w-24 h-24 object-contain' src={image} alt={title} />
      <h3 className='text-2xl font-semibold'>{title}</h3>
      <p className='text-gray-700 text-sm'>{description}</p>
      <button className='bg-menu-rosy-warm text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-200'>
        Read More
      </button>
    </div>
  )
}

export default FeatureCard
