import React from 'react';
import './Home.css';
import CharactersList from './CharactersList';
import Filters from './Filters';
import PropTypes from 'prop-types';
import hpLogo from '../Images/hp-logo.svg';
import FavoritesList from './FavoritesList';

class Home extends React.Component {
  render () {
    const {
      filterValue,
      characters,
      handleFilter,
      handleClickSearch,
      searchClicked,
      handleSort,
      sortedCharacters,
      handleFavorites,
      favoriteCharacters,
      favClicked,
      handleClickFav,
      handleFav
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
          <div className="header__icons">
            <i
              className={`fas fa-heart filter__icon ${favClicked ? 'clicked' : ''}`}
              title="Ver favoritos"
              onClick={handleClickFav}
            />
            <i
              className={`fas fa-search filter__icon ${searchClicked ? 'clicked' : ''}`}
              title="Mostrar filtros"
              onClick={handleClickSearch}
            />
          </div>
        </header>
        <main>
          <Filters
            handleFilter={handleFilter}
            filterValue={filterValue}
            searchClicked={searchClicked}
            handleSort={handleSort}
            sortedCharacters={sortedCharacters}
          />
          <CharactersList
            characters={characters}
            filterValue={filterValue}
            sortedCharacters={sortedCharacters}
            handleFavorites={handleFavorites}
            favoriteCharacters={favoriteCharacters}
          />
          <FavoritesList 
          favoriteCharacters={favoriteCharacters}
          characters={characters}
          favClicked= {favClicked}
          handleFavorites={handleFavorites}
          />
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
  searchClicked: PropTypes.bool,
  handleSort: PropTypes.func,
  sortedCharacters: PropTypes.array,
  handleFavorites: PropTypes.func,
  favoriteCharacters: PropTypes.array,
  favClicked: PropTypes.bool,
  handleClickFav: PropTypes.func,
  handleFav: PropTypes.func
};

export default Home;
