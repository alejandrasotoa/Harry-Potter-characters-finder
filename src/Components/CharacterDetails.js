import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterDetails.css';

//nombre, foto y casa, el año de nacimiento, el patronus y si está vivo o muerto al final de la saga

class CharacterDetails extends React.Component {
  render () {
    const { characters } = this.props;
    const characterID = this.props.match.params.id;
    const newCard = characters.find (character => characterID === character.id);

    return (
      <React.Fragment>
        {newCard ?
        <ul className="detail__card--list">
          <li>
            <div
              className="detail__photo"
              style={{backgroundImage: `url(${newCard.image})`}}
            />
          </li>
          <li className="detail__name">{`Nombre: ${newCard.name}`}</li>
          <li className="detail__house">{`Casa: ${newCard.house}`}</li>
          <li className="detail__year">{`Año de nacimiento: ${newCard.yearOfBirth}`}</li>
          <li className="detail__patronus">{`Patronus: ${newCard.patronus}`}</li>
          <li className="detail__alive">{`Estado: ${newCard.alive ? 'Vivo' : 'Muerto'}`}</li>
        </ul>
        : <p>Cargando...</p>
        }
        <Link to="/">Volver</Link>
      </React.Fragment>
    );
  }
}

export default CharacterDetails;
