import React from 'react'
import FeatureCard from '../components/FeatureCard'
import profile from '../images/about1.jpeg'

const Features = () => {
  return (
    <section className='p-20  bg-menu-rosy-warm'>
        <h1 className='text-headings items-center text-center mb-10'>What we offer?</h1>
        <div className='grid gap-10 grid-cols-1 md:grid-cols-3 place-items-center'>
        <FeatureCard
            image = {profile}
            title="Verified Profiles"
            description="We verify users for authentic and trusted connections"
        />
         <FeatureCard
            image = {profile}
            title="Verified Profiles"
            description="We verify users for authentic and trusted connections"
        />
         <FeatureCard
            image = {profile}
            title="Verified Profiles"
            description="We verify users for authentic and trusted connections"
        />
        <FeatureCard
            image = {profile}
            title="Verified Profiles"
            description="We verify users for authentic and trusted connections"
        />
         <FeatureCard
            image = {profile}
            title="Verified Profiles"
            description="We verify users for authentic and trusted connections"
        />
         <FeatureCard
            image = {profile}
            title="Verified Profiles"
            description="We verify users for authentic and trusted connections"
        />
        </div>
       
    </section>
  )
}

export default Features