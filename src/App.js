import React from 'react';
import './App.css';
import { fetchData } from './DataServices/DataServices';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters : []
    }
  }

  componentDidMount () {
    this.fetchCharacters();
  }

  fetchCharacters () {
    fetchData()
    .then (data => {
      this.setState({characters: data})
      })
  }

  render () {
  return (
    <div className="App">

    </div>
  );
}
}

export default App;
