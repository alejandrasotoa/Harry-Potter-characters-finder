import React from 'react';
import './Filters.css';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render () {
    const {filterValue, handleFilter, searchClicked} = this.props;
    return (
      <div className={`filter__container ${searchClicked ? "" : "hidden" }`}>
      <label htmlFor="filter__form filter__label">Filtrar por nombre</label>
        <input 
          className="filter__form filter__input"
          onChange={handleFilter}
          value={filterValue}
          type="text"
          name="filter__form"
          placeholder="Filtrar por nombre"
        />
      </div>
    );
  }
}

Filters.propTypes = {
  filterValue: PropTypes.string,
  handleFilter: PropTypes.func,
  searchClicked: PropTypes.bool
};

export default Filters;
