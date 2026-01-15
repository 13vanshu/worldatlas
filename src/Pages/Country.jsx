import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../Api/Postapi";
import "./Country.css";
import Loader from "./Loader";
import CountryCard from "../Component/Layout/CountryCard";
import SearchFilter from "../Component/UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

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

  /* 🔍 Search logic */
  const searchCountry = (country) => {
    return country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());
  };

  /* 🌍 Filter + Search combined */
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = searchCountry(country);

    const matchesRegion =
      filter === "all"
        ? true
        : country.region.toLowerCase() === filter.toLowerCase();

    return matchesSearch && matchesRegion;
  });

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <ul className="grid grid-four-cols">
        {filteredCountries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Country;
