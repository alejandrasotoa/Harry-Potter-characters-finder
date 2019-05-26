import React from 'react';
import CharacterCard from './CharacterCard';
import './CharactersList.css';
import PropTypes from 'prop-types';

class CharactersList extends React.Component {
  render () {
    const {characters, filterValue} = this.props;
    const buildCharacters = characters
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
            <CharacterCard character={character} />
          </li>
        );
      });

    return (
      <section className="search__result">
        <ul className="character__list">
          {buildCharacters}
        </ul>
      </section>
    );
  }
}

CharactersList.propTypes = {
  characters: PropTypes.array,
  filterValue: PropTypes.string,
};

export default CharactersList;
