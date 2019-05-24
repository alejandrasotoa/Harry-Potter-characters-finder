import React from 'react';
import './CharacterDetails.css';

//nombre, foto y casa, el año de nacimiento, el patronus y si está vivo o muerto al final de la saga

class CharacterDetails extends React.Component {
  render () {
    const {characters} = this.props;
    const characterID = this.props.match.params.id;
    const newCard = characters.find (character => characterID === character.id);

    return (
      <div className="detail__card--list">
      <div
          className="detail__photo"
          style={{backgroundImage: `url(${newCard.image})`}}
        />
        <h2 className="detail__name">{`Nombre: ${newCard.name}`}</h2>
        <p className="detail__house">{`Casa: ${newCard.house}`}</p>
        
      </div>
    );
  }
}

export default CharacterDetails;
