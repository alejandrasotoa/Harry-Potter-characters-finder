import React from 'react';
import './Home.css';
import CharactersList from './CharactersList';
import Filters from './Filters';

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

export default Home;
