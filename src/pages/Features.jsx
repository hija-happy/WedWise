import React from 'react'
import FeatureCard from '../components/FeatureCard'
import profile from '../images/about1.jpeg'

const Features = () => {
  return (
    <section className='p-20 grid-cols-1 md:grid-cols-3 bg-menu-rosy-warm'>
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
    </section>
  )
}

export default Features