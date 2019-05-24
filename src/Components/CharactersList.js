import React from 'react';
import "./CharactersList.css";

class CharactersList extends React.Component {
  render () {
    const {characters} = this.props;
    const buildCharacters = characters.map (character => {
      return (
        <li
          key={character.id}
          id={character.id}
          className="character__container"
        >
          <div
            className="character__photo"
            style={{backgroundImage: `url(${character.image})`}}
          />
          <h2 className="character__title">{character.name}</h2>
          <p className="character__subtitle">{character.house}</p>
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
