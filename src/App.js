import React from 'react';
import './App.css';
import {fetchData} from './DataServices/DataServices';
import Home from './Components/Home';
import {Switch, Route} from 'react-router-dom';
import CharacterDetails from './Components/CharacterDetails';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      characters: [],
      favoriteCharacters: [],
      sortedCharacters: null,
      filterValue: '',
      searchClicked: false,
      favClicked: false,
    };
    this.handleFilter = this.handleFilter.bind (this);
    this.handleClickSearch = this.handleClickSearch.bind (this);
    this.handleSort = this.handleSort.bind (this);
    this.handleFavorites = this.handleFavorites.bind (this);
    this.handleClickFav = this.handleClickFav.bind (this);
  }

  componentDidMount () {
    this.fetchCharacters ();
    const favCharacters = JSON.parse (localStorage.getItem ('favCharacters'));
    if (favCharacters !== null) {
      this.setState ({favoriteCharacters: favCharacters});
    }
  }

  componentDidUpdate () {
    if (this.state.favoriteCharacters !== []) {
      localStorage.setItem (
        'favCharacters',
        JSON.stringify (this.state.favoriteCharacters)
      );
    }
  }

  fetchCharacters () {
    fetchData ().then (data => {
      const newData = data.map ((item, index) => {
        return {...item, id: `hp-${index}`};
      });
      this.setState ({characters: newData});
    });
  }

  handleFilter (event) {
    this.setState ({filterValue: event.currentTarget.value});
  }

  handleClickSearch () {
    this.setState (prevState => ({searchClicked: !prevState.searchClicked}));
  }

  handleClickFav () {
    this.setState(prevState => ({
      favClicked : !prevState.favClicked
    }))
  }

  sortAlphabetical () {
    const sortedArray = [...this.state.characters];
    const sorted = sortedArray.sort ((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState ({
      sortedCharacters: sorted,
    });
  }

  sortAge () {
    const sortedArray = [...this.state.characters];
    const sorted = sortedArray.sort ((a, b) => {
      if (b.yearOfBirth > a.yearOfBirth) {
        return 1;
      }
      if (b.yearOfBirth < a.yearOfBirth) {
        return -1;
      }
      return 0;
    });
    this.setState ({
      sortedCharacters: sorted,
    });
  }

  handleSort (event) {
    const sortValue = event.currentTarget.value;
    if (sortValue === 'no-filter') {
      this.setState ({
        sortedCharacters: null,
      });
    } else if (sortValue === 'alphabetical') {
      this.sortAlphabetical ();
    } else {
      this.sortAge ();
    }
  }

  handleFavorites (event) {
    const favValue = event.currentTarget.parentElement.id === "" ? event.currentTarget.id : event.currentTarget.parentElement.id;
    const newFavorite = this.state.characters.find (
      character => favValue === character.id
    );
    this.setState (prevState => {
      let setFavorite;
      const removeValue = prevState.favoriteCharacters.findIndex(fav => newFavorite.id === fav.id);
      if (removeValue >= 0) {
        setFavorite = prevState.favoriteCharacters.filter(fav => fav.id !== favValue);
        console.log(setFavorite);
      } else {
        setFavorite = [...prevState.favoriteCharacters, newFavorite];
      }
      return {favoriteCharacters: setFavorite};
    });
  }

  render () {
    const {
      filterValue,
      characters,
      searchClicked,
      sortedCharacters,
      favoriteCharacters,
      favClicked,
    } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              filterValue={filterValue}
              characters={characters}
              handleFilter={this.handleFilter}
              handleClickSearch={this.handleClickSearch}
              searchClicked={searchClicked}
              handleSort={this.handleSort}
              sortedCharacters={sortedCharacters}
              handleFavorites={this.handleFavorites}
              favoriteCharacters={favoriteCharacters}
              favClicked={favClicked}
              handleClickFav={this.handleClickFav}
            />
          )}
        />
        <Route
          path="/detail/:id"
          render={props => (
            <CharacterDetails match={props.match} characters={characters} />
          )}
        />
      </Switch>
    );
  }
}

export default App;
