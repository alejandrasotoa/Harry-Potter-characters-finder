import React from 'react';
import PropTypes from 'prop-types';
import './FavoritesList.css';

class FavoritesList extends React.Component {
  render () {
    const {favoriteCharacters, favClicked, handleFavorites} = this.props;
    const favList = favoriteCharacters.map (fav => {
      return (
        <li
          className="favorite__item"
          key={`fav-${fav.id}`}
          id={fav.id}
          onClick={handleFavorites}
        >
          <div className="favorite__more">
            <i className="fas fa-trash-alt favorite__icon" />
          </div>
          <div
            className="favorite__photo"
            style={{backgroundImage: `url(${fav.image})`}}
          >
            {' '}
          </div>
        </li>
      );
    });
    return (
      <div
        className={`favorite__container--shadow ${favClicked ? '' : 'hidden'}`}
      >
        <div
          className={`favorite__container ${favClicked ? '' : 'hiddden__favorites'}`}
        >
          <h2 className="favorite__title">Mis Favoritos</h2>
          <ul className="favorite__list">
            {favList}
          </ul>
        </div>
      </div>
    );
  }
}

FavoritesList.propTypes = {
  favoriteCharacters: PropTypes.array,
  favClicked: PropTypes.bool,
  handleClickFav: PropTypes.func,
};

export default FavoritesList;
