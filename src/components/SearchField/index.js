import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

function SearchField({ onSearch }) {
    const [value, setValue] = useState('');
    const handleSearch = (event) => {
        setValue(event.target.value);
        onSearch(event.target.value);
    };
    return (
        <form
            data-testid="SearchField"
            className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"
        >
            <div className="input-group">
                <input
                    value={value}
                    onChange={handleSearch}
                    className="form-control"
                    type="text"
                    placeholder="Search for..."
                    aria-label="Search for..."
                    aria-describedby="btnNavbarSearch"
                />
                <button className="btn btn-primary" id="btnNavbarSearch" type="button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </form>
    );
}
SearchField.propTypes = {
    onSearch: PropTypes.func,
};
SearchField.defaultProps = {
    onSearch: (value) => value,
};

export default SearchField;
