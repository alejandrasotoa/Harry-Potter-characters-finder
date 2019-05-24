import React from 'react';
import './App.css';
import {fetchData} from './DataServices/DataServices';
import CharactersList from './Components/CharactersList';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      characters: [],
    };
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

  render () {


    return (
      <div className="App">
        <CharactersList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
