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
      filterValue: '',
      searchClicked: false
    };
    this.handleFilter = this.handleFilter.bind (this);
    this.handleClickSearch =this.handleClickSearch.bind(this);
  }

  componentDidMount () {
    this.fetchCharacters ();
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
    this.setState(prevState => ({searchClicked: !prevState.searchClicked}));
  }

  render () {
    const {filterValue, characters, searchClicked} = this.state;
    return (
      <Switch>
        <Route exact path="/"
          render={() => (
            <Home
              filterValue={filterValue}
              characters={characters}
              handleFilter={this.handleFilter}
              handleClickSearch={this.handleClickSearch}
              searchClicked={searchClicked}
            />
          )}
        />
        <Route path="/detail/:id"
          render={props => <CharacterDetails match={props.match} characters={characters} />}
        />
      </Switch>
    );
  }
}

export default App;
