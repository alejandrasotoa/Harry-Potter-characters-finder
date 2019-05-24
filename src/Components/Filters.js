import React from 'react';
import './Filters.css';

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

export default Filters;
