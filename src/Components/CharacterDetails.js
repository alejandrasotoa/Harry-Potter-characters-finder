import React from 'react';
import {Link} from 'react-router-dom';
import './CharacterDetails.css';
import PropTypes from 'prop-types';

class CharacterDetails extends React.Component {
  render () {
    const {characters} = this.props;
    const characterID = this.props.match.params.id;
    const newCard = characters.find (character => characterID === character.id);

    return (
      <React.Fragment>
        {newCard
          ? <div
              className={`detail__container ${newCard.house !== "" ? newCard.house.toLowerCase () : "no--house"}__background`}
            >
              <div className="detail__card--container">
                <div
                  className="detail__photo"
                  style={{backgroundImage: `url(${newCard.image})`}}
                />
                <div className="detail__info--container">
                  <h2 className="detail__name">{newCard.name}</h2>
                  <p className="detail__house">{`Casa: ${newCard.house}`}</p>
                  <p className="detail__year">{`Año de nacimiento: ${newCard.yearOfBirth}`}</p>
                  <p className="detail__patronus">{`Patronus: ${newCard.patronus}`}</p>
                  <p className="detail__alive">{`Estado: ${newCard.alive ? 'Vivo' : 'Muerto'}`}</p>
              <Link to="/"><i className="fas fa-arrow-circle-left detail__icon" title="Volver atrás"></i></Link>
                </div>
              </div>
            </div>
          : <p>Cargando...</p>}
      </React.Fragment>
    );
  }
}

CharacterDetails.propTypes = {
  characters: PropTypes.array,
};

export default CharacterDetails;
