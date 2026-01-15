import React from 'react'
import './CountryDetails.css'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState, useTransition } from 'react';
import { getCountryIndData } from '../../Api/Postapi';
import Loader from '../../Pages/Loader';

const CountryDetails = () => {

  const params = useParams();
  console.log(params);

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndData(params.id);

        if (res.status === 200 && res.data?.length) {
          setCountry(res.data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    });
  }, [params.id]);

  if (isPending || !country) {
    return <Loader />;
  }

  return (
    <section className=' card country-details-card conatainer'>
      <div className='container-card bg-white-box'>
        <div className='country-image grid grid-two-cols'>
          <img
            src={country.flags?.svg}
            alt={country.name?.official}
            className="flag"
          />
          <div className='country-content'>
            <p className='card-title'> {country.name?.official}</p>
            <div className='infoContainer'>
              <p>
                <span className='card-description'>Native Names:</span>
                {Object.keys(country.name.nativeName)
                  .map((key) => country.name.nativeName[key].common)
                  .join(", ")
                } ੰ
              </p>
              <p>
                <span className='card-description'>Population:</span>
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className='card-description'>Region:</span>
                {country.region}
              </p>
              <p>
                <span className='card-description'>Sub Region:</span>
                {country.subregion}
              </p>   
              <p>
                <span className='card-description'>Capital:</span>
                {country.capital}
              </p>
              <p>
                <span className='card-description'>Top Level Domain:</span>
                {country.tld}
              </p>
              <p>
                <span className='card-description'>Currencies:</span>
                {Object.keys(country.currencies)
                  .map((curElem) => country.currencies[curElem].name)
                  .join(", ")
                }
              </p>
              <p>
                <span className='card-description'>Languages:</span>
                {Object.keys(country.languages)
                  .map((Key) => country.languages[Key])
                  .join(", ")
                }
              </p>
            </div>
          </div>
        </div>
        <div className='country-card-backbtn'>
          <NavLink to="/country" className="back-btn">
            <button> Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default CountryDetails
