import React from 'react';
import './Home.css';
import CharactersList from './CharactersList';
import Filters from './Filters';
import PropTypes from 'prop-types';
import hpLogo from '../Images/hp-logo.svg';

class Home extends React.Component {
  render () {
    const {
      filterValue,
      characters,
      handleFilter,
      handleClickSearch,
      searchClicked,
    } = this.props;

    return (
      <div className="app__container">
        <header className="app__header">
          <div className="header__container">
            <img
              className="header__logo"
              src={hpLogo}
              alt="Logo de Harry Potter"
            />
            <h1 className="header__title">Buscador de personajes</h1>
          </div>
          <i
            className="fas fa-search filter__icon"
            onClick={handleClickSearch}
          />
        </header>
        <main>
          <Filters
            handleFilter={handleFilter}
            filterValue={filterValue}
            searchClicked={searchClicked}
          />
          <CharactersList characters={characters} filterValue={filterValue} />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  characters: PropTypes.array,
  filterValue: PropTypes.string,
  handleFilter: PropTypes.func,
  handleClickSearch: PropTypes.func,
};
export default Home;
