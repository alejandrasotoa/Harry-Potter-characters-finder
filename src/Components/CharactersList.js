import React from 'react';
import CharacterCard from './CharacterCard';
import './CharactersList.css';

class CharactersList extends React.Component {
  render () {
    const {characters, filterValue} = this.props;
    const buildCharacters = characters
      .filter (character =>
        character.name.toLowerCase ().includes (filterValue.toLowerCase ())
      )
      .map (character => {
        return (
          <li key={character.id} 
            id={characters.id}
            className="character__container">
            <CharacterCard character={character} />
          </li>
        );
      });

    return (
      <div className="Home">
        <section className="search__result">
          <ul className="character__list">
            {buildCharacters}
          </ul>
        </section>
      </div>
    );
  }
}

export default CharactersList;
