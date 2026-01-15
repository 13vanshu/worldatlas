import React from 'react'
import countryFacts from "../Api/countryData.json"
import './About.css'; 

const About = () => {
  return (
    <section className='section-about about-container'>
      <h2 className='about-container-title'>
        Here are the Interesting Facts
        <br />
        we,re Proud of
      </h2>
      <div className='about-gradient-card'>
        {
          countryFacts.map((country) => {
            return <div className='about-card' key={country.id}>
              <div className='about-container-card about-bg-blue-box'>
                <p className='about-card-title'>{country.countryName}</p>
                <p>
                  <span className='about-card-description'>Capital:</span>
                  {country.capital}
                </p>
                <p>
                  <span className='about-card-description'>Population:</span>
                  {country.population}
                </p>
                <p>
                  <span className='about-card-description'>Interesting Fact:</span>
                  {country.interestingFact}
                </p>
              </div>
            </div>
          })
        }
      </div>
    </section>
  )
}

export default About
