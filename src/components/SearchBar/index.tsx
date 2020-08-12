import React, { useState, useEffect } from 'react';

type Props = {};

const SearchBar: React.FC<Props> = (props) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchValid, setSearchValid] = useState<boolean>(true);

  const setSearchFromUrl = () => {
    const initialParams = new URLSearchParams(location.search);
    if (initialParams.has('q')) {
      setSearchValue(initialParams.get('q'))
    }
  }

  const updateUrlSearch = () => {
    const params = new URLSearchParams();
    params.append("q", searchValue);
    window.history.pushState(null, null, `${location.origin}${location.pathname}?${params.toString()}`);
  }

  useEffect(() => {
    if (!searchValid && searchValue) {
      setSearchValid(true);
    }
    updateUrlSearch();
    if (!searchValue) {
      setSearchFromUrl();
    }
  })

  const handleSearch = () => {
    if (!searchValue) {
      setSearchValid(false);
      return;
    }
    console.log('search for user: ', searchValue);
  }

  return (
    <div className="row">
      <div className="col-xl-6 form-group">
        <input
          className={`form-control${ !searchValid ? ' is-invalid' : '' }`}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          required
        />
        <div className="invalid-feedback">
          Please enter username.
        </div>
        <div className="btn btn-primary text-center mt-2 w-100" onClick={() => handleSearch()}>
          Search
        </div>
      </div>
    </div>
  )
}

export default SearchBar;
