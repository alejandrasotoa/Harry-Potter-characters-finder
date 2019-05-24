import React from 'react';
import './App.css';
import {fetchData} from './DataServices/DataServices';
import CharactersList from './Components/CharactersList';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      characters: [],
      filterValue: '',
    };
    this.handleFilter = this.handleFilter.bind (this);
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

  render () {
    console.log (this.state.filterValue);
    return (
      <div className="App">
        <div className="filter__container">
          <input
            value={this.state.filterValue}
            className="filter__form"
            onChange={this.handleFilter}
          />
        </div>
        <CharactersList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
