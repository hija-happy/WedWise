import React from 'react'

const FeatureCard = ({image, title, description}) => {
  return (
    <div className='flex flex-col items-center justify-center w-70 h-70 bg-amber-50 rounded-md '>
        <img className='w-30 h-30 p-3' src={image} alt="" />
        <h3 className='text-2xl'>{title}</h3>
        <p>{description} </p>
    </div>
  )
}

export default FeatureCard