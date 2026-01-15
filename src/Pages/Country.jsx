import { useEffect, useState, useTransition } from 'react';
import { getCountryData } from '../Api/Postapi';
import './Country.css';
import Loader from './Loader';
import CountryCard from '../Component/Layout/CountryCard';

const Country = () => {

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data); 
      } catch (error) {
        console.error(error);
      }
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  return (
    <section className="country-section">[]
      <ul className="grid grid-four-cols">
        {countries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Country;
