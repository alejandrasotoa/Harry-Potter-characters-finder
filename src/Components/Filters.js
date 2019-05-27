import React from 'react';
import './Filters.css';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render () {
    const {filterValue, handleFilter, searchClicked, handleSort} = this.props;
    return (
      <div className={`filter__container ${searchClicked ? '' : 'hidden__filter'}`}>
        <div className="filter__input--container">
          <label className="filter__form filter__label" htmlFor="filter__form">
            Filtrar por nombre
          </label>
          <input
            className="filter__form filter__input"
            onChange={handleFilter}
            value={filterValue}
            type="text"
            name="filter__form"
            placeholder="Introduce el nombre"
          />
        </div>
        <div className="order__container">
          <label htmlFor="order__form" className="filter__form filter__label">
            Ordenar por
          </label>
          <select
            name="order__form"
            className="filter__form filter__input"
            onChange={handleSort}
          >
            <option value="-">Ordenar por:</option>
            <option value="no-filter">Por defecto</option>
            <option value="alphabetical">Orden alfabético</option>
            <option value="age">Por año de nacimiento</option>
          </select>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  filterValue: PropTypes.string,
  handleFilter: PropTypes.func,
  searchClicked: PropTypes.bool,
  handleSort: PropTypes.func,
};

export default Filters;
