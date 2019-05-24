import React from 'react';
import {Link} from 'react-router-dom';
import './CharacterCard.css';

class CharacterCard extends React.Component {
  render () {
    const {id, image, name, house} = this.props.character;
    return (
      <React.Fragment>
        <div
          className="character__photo"
          style={{backgroundImage: `url(${image})`}}
        />
        <h2 className="character__title">{name}</h2>
        <p className="character__subtitle">{house}</p>
        <Link to={`/detail/${id}`}>Detalles</Link>
      </React.Fragment>
    );
  }
}

export default CharacterCard;
