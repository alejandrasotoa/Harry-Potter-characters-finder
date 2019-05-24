import React from 'react';
import './CharacterCard.css';

class CharacterCard extends React.Component {
  render () {
      const {id, image, name, house} = this.props.character
      return (
        <li
        key={id}
        id={id}
        className="character__container"
      >
        <div
          className="character__photo"
          style={{backgroundImage: `url(${image})`}}
        />
        <h2 className="character__title">{name}</h2>
        <p className="character__subtitle">{house}</p>
      </li>
      )
  }
}

export default CharacterCard;
