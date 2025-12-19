import React from 'react'
import usefetch from '../Hooks/usefetch';
import CountryCard from '../Component/Layout/CountryCard';
import './Country.css';

const Country = () => {
  const { data, load, error } = usefetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,subregion,currencies,languages"
    );
    
    console.log(data);
    
  return (
    <section className='country-section'>
      <ul className='grid grid-four-cols'>
        {
         data.map((curcountry) => {
          return <CountryCard data = 
          {curcountry} />
         })
        }
      </ul>
    </section>
  )
}

export default Country
