import React from 'react';
import './Filters.css';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render () {
    const {filterValue, handleFilter, searchClicked, handleSort} = this.props;
    return (
      <div className={`filter__container ${searchClicked ? '' : 'hidden'}`}>
        <label htmlFor="filter__form filter__label">Filtrar por nombre</label>
        <input
          className="filter__form filter__input"
          onChange={handleFilter}
          value={filterValue}
          type="text"
          name="filter__form"
          placeholder="Introduce el nombre"
        />

        <label htmlFor="order__form">Ordenar por</label>
        <select name="order__form" className="filter__form filter__input" onChange={handleSort}>
          <option value="no-filter">-</option>
          <option value="alphabetical">Orden alfabético</option>
          <option value="age">Por año de nacimiento</option>
        </select>
      </div>
    );
  }
}

Filters.propTypes = {
  filterValue: PropTypes.string,
  handleFilter: PropTypes.func,
  searchClicked: PropTypes.bool,
  handleSort: PropTypes.func
};

export default Filters;
