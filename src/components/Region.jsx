import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { fetchCountries } from '../redux/countries/countriesSlice';

const Region = () => {
  const dispatch = useDispatch();
  const { region } = useParams();

  useEffect(() => {
    dispatch(fetchCountries(region));
  }, [dispatch, region]);

  const navigate = useNavigate();
  const { loading, data, error } = useSelector((state) => state.countries);

  // State variables for search functionality
  const [searchInput, setSearchInput] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(data); // Initialize with original data
  const [searchError, setSearchError] = useState(null); // State for search error

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    setSearchError(null);
  };

  // Function to handle search button click
  const handleSearchButtonClick = () => {
    const inputValue = searchInput.trim().toLowerCase();
    const filtered = data.filter((country) => country.name.common.toLowerCase() === inputValue);

    if (filtered.length === 0) {
      setSearchError('Country not found');
      setFilteredCountries([]); // Clear filtered countries
    } else {
      setSearchError(null); // Clear search error
      setFilteredCountries(filtered);
    }
  };

  return (
    <>
      <div>
        <header className="header">
          <button className="btn-icon-left" type="button" onClick={() => navigate(-1)}>
            <BsArrowLeftCircle className="icon-left" />
          </button>
          <h2>{region}</h2>
        </header>
        <div className="region-title">
          <input
            placeholder="Search for country"
            className="inputSearch"
            type="text"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <button className="btnSearch" type="button" onClick={handleSearchButtonClick}>
            Search
          </button>
        </div>
        {loading && <div className="loading">loading...</div>}
        {error && <div>error</div>}
        {searchError && <div>{searchError}</div>}
        {' '}
        {/* Display search error */}
        <ul className="list-country">
          {!loading
            && filteredCountries.map((country) => (
              <li key={country.latlng[0]} className="list-item">
                <Link to={`/${region}/${country.name.common}/${country.latlng[0]}/${country.latlng[1]}`}>
                  <div className="country">
                    <img src={country.flags.png} alt={country.flags.alt} className="country-img" />
                    <div>
                      <BsArrowRightCircle />
                    </div>
                  </div>
                  <div className="country-area">
                    <span className="country-name">{country.name.common}</span>
                    <span>
                      {country.area}
                      {' '}
                      km
                      <sup>2</sup>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Region;
