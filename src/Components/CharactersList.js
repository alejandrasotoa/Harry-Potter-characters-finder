import React from 'react';
import CharacterCard from './CharacterCard';
import './CharactersList.css';
import PropTypes from 'prop-types';

class CharactersList extends React.Component {
  render () {
    const {
      characters,
      filterValue,
      sortedCharacters,
      handleFavorites,
      favoriteCharacters,
    } = this.props;
    const arrayList = sortedCharacters === null ? characters : sortedCharacters;
    const buildCharacters = arrayList
      .filter (character =>
        character.name.toLowerCase ().includes (filterValue.toLowerCase ())
      )
      .map (character => {
        return (
          <li
            key={character.id}
            id={characters.id}
            className="character__container"
          >
            <CharacterCard
              character={character}
              handleFavorites={handleFavorites}
              favoriteCharacters={favoriteCharacters}
            />
          </li>
        );
      });

    return (
      <section className="search__result">
        <ul className="character__list">
          {buildCharacters.length === 0 && filterValue
            ? <p className="no-results__paragraph">No hay resultados</p>
            : buildCharacters}
        </ul>
      </section>
    );
  }
}

CharactersList.propTypes = {
  characters: PropTypes.array,
  filterValue: PropTypes.string,
  sortedCharacters: PropTypes.array,
  handleFavorites: PropTypes.func,
  favoriteCharacters: PropTypes.array,
};

export default CharactersList;
