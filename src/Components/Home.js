import React from 'react';
import './Home.css';
import CharactersList from './CharactersList';
import Filters from './Filters';
import PropTypes from 'prop-types';

class Home extends React.Component {
  render () {
    const { filterValue, characters, handleFilter } = this.props;

    return (
      <React.Fragment>
        <Filters handleFilter={handleFilter} filterValue={filterValue} />
        <CharactersList characters={characters} filterValue={filterValue} />
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  characters: PropTypes.array,
  filterValue: PropTypes.string,
  handleFilter: PropTypes.func
};
export default Home;
