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

  // 🔹 Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 8;

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

  // Reset page when filter/search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter]);

  if (isPending) {
    return <Loader />;
  }

  /* 🔍 Search logic */
  const searchCountry = (country) => {
    return country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());
  };

  /* 🌍 Filter + Search */
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = searchCountry(country);

    const matchesRegion =
      filter === "all"
        ? true
        : country.region.toLowerCase() === filter.toLowerCase();

    return matchesSearch && matchesRegion;
  });

  /* 📄 Pagination logic */
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const totalPages = Math.ceil(
    filteredCountries.length / countriesPerPage
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <ul className="grid grid-four-cols">
        {currentCountries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>

      {/* 🔹 Pagination Buttons */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        <span className="page-info">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Country;
