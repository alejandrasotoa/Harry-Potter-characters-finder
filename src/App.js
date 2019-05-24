import React from 'react';
import './App.css';
import {fetchData} from './DataServices/DataServices';

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
    const {characters} = this.state;
    const charactersBuilder = characters.map (character => {
      return (
        <li
          key={character.id}
          id={character.id}
          className="character__container"
        >
          <div
            className="character__photo"
            style={{backgroundImage: `url(${character.image})`}}
          />
          <h2 className="character__title">{character.name}</h2>
          <p className="character__subtitle">{character.house}</p>
        </li>
      );
    });

    return (
      <div className="App">

        <div className="Home">
          <section className="search__result">
            <ul className="character__list">
              {charactersBuilder}
            </ul>
          </section>
        </div>
        
      </div>
    );
  }
}

export default App;
