import React from 'react'
// import sections
import Hero from '../components/sections_threatx/Hero';
import FeaturesAward from '../components/sections_threatx/FeaturesAward'
import FeaturesSplit from '../components/sections_threatx/FeaturesSplit'
import FeaturesReason from '../components/sections_threatx/FeaturesReason'
import FeaturesPartner from '../components/sections_threatx/FeaturesPartner'

function ThreatX() {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesReason />
      <FeaturesSplit />
      <FeaturesAward />
      <FeaturesPartner />
    </>
  )
}

export default ThreatX