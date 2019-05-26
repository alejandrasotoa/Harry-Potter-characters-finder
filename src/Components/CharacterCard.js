import React from 'react';
import {Link} from 'react-router-dom';
import './CharacterCard.css';
import PropTypes from 'prop-types';

class CharacterCard extends React.Component {
  render () {
    const {id, image, name, house} = this.props.character;
    return (
      <React.Fragment>
        <div
          className="character__photo"
          style={{backgroundImage: `url(${image})`}}
        >
          <div className="character__more">
            <Link to={`/detail/${id}`} className="characters__link">
              <i className="fas fa-info-circle characters__icon" />
            </Link>
            <i className="fas fa-heart characters__icon favorite--icon" />
          </div>
        </div>
        <div className="character__info">
          {house !== ''
            ? <div className={`${house.toLowerCase ()}__logo`} title={house} />
            : <i
                class="far fa-times-circle no-house__icon"
                title="No estudió en Hogwarts"
              />}
          <h2 className="character__title">{name}</h2>
        </div>

        <div className="character__info--detail" />
      </React.Fragment>
    );
  }
}

CharacterCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  house: PropTypes.string,
};

export default CharacterCard;
