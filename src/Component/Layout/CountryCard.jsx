
import { NavLink } from 'react-router-dom';
import './CountryCard.css';


const CountryCard = ({ country }) => {

  const {flags, name, population, region, capital} = country;

  return <li className="country country-card">
    <div className="countrycard-container-card countrycard-bg-white-box">
      <img src={flags.svg} alt={name.alt} />
      <div className='countrycard-countryInfo'>
        <p className='countrycard-card-title'>{name.common}</p>
        <p>
          <span className='countrycard-card-description'>Population:</span>
          {population.toLocaleString()}
        </p>
        <p>
          <span className='countrycard-card-description'>Region: </span>{region}
        </p>
        <p>
          <span className='countrycard-card-description'>Capital: </span>
          {capital[0]}
        </p>
        <NavLink to={`/country/${name.common}`}>
          <button className="countrycard-learn-more">Learn More</button>
        </NavLink>
      </div>
    </div>
  </li>
}

export default CountryCard 
