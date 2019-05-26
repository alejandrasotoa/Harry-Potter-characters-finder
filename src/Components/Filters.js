import React from 'react';
import './Filters.css';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render () {
    const {filterValue, handleFilter} = this.props;
    return (
      <div className="filter__container">
      <label htmlFor="filter__form">Filtrar por nombre</label>
        <input 
          className="filter__form"
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
  handleFilter: PropTypes.func
};

export default Filters;
