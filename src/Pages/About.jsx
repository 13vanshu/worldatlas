import React from 'react'
import countryFacts from "../Api/countryData.json"

const About = () => {
  return (
    <section className='section-about container'>
      <h2 className='container-title'>
        Here are the Interesting Facts
        <br />
        we,re Proud of
      </h2>
      <div className='gradient-card'>
        {
          countryFacts.map((country) => {
            return <div className='card' key={country.id}>
              <div className='container-card bg-blue-box'>
                <p className='card-title'>{country.countryName}</p>
                <p>
                  <span className='card-description'>Capital:</span>
                  {country.capital}
                </p>
                <p>
                  <span className='card-description'>Population:</span>
                  {country.population}
                </p>
                <p>
                  <span className='card-description'>Interesting Fact:</span>
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
