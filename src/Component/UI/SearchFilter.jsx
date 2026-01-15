import React from 'react'
import './SearchFilter.css'

const SearchFilter = ({ search, setSearch, filter, setFilter }) => {

    const handleInputChange = (e) => {
        
        setSearch(e.target.value);
    }

    const handleSelectChange = (e) => {
        setFilter(e.target.value);
    }

  return (
    <section className='section-searchFilter-container'>
        <input type="text"
         placeholder="Search Country"
         value={search}
         onChange={handleInputChange}
        />

        <div>
            <select className='select-filter'
            value={filter}
            onChange={handleSelectChange}
            >
                <option value="all">All</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
                <option value="antarctic">Antarctic</option>

            </select>
        </div>
    </section>
  )
}

export default SearchFilter
