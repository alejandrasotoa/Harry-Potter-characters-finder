import React from 'react';
import './App.css';
import {fetchData} from './DataServices/DataServices';
import Home from './Components/Home';

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
    const {filterValue, characters} = this.state;
    return (
      <div className="App">
        <Home
          filterValue={filterValue}
          characters={characters}
          handleFilter={this.handleFilter}
        />
      </div>
    );
  }
}

export default App;
