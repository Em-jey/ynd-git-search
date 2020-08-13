import React, { useState, useEffect, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { searchUsers } from 'store/gitUsers';

type Props = {};
let initDone: boolean = false;

const SearchBar: React.FC<Props> = (props) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchValid, setSearchValid] = useState<boolean>(true);
  const dispatch = useDispatch();

  const setSearchFromUrl = () => {
    const initialParams = new URLSearchParams(location.search);
    if (initialParams.has('q')) {
      setSearchValue(initialParams.get('q'));
    }
    initDone = true;
  };

  const updateUrlSearch = () => {
    const params = new URLSearchParams();
    if(searchValue) {
      params.append("q", searchValue);
    }
    window.history.pushState(null, null, `${location.origin}${location.pathname}?${params.toString()}`);
  };

  useEffect(() => {
    if (!searchValid && searchValue) {
      setSearchValid(true);
    }
    if (!searchValue && !initDone) {
      setSearchFromUrl();
    }
    if (initDone) {
      updateUrlSearch();
    }
  }, [searchValue]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!searchValue) {
      setSearchValid(false);
      return;
    }
    dispatch(searchUsers(searchValue));
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="row">
        <div className="col-lg-6 form-group">
          <input
            className={`form-control${ !searchValid ? ' is-invalid' : '' }`}
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
            placeholder="Enter username"
          />
          <div className="invalid-feedback">
            Please enter username.
          </div>
          <button
            type="submit"
            className="btn btn-primary text-center mt-2 w-100"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
