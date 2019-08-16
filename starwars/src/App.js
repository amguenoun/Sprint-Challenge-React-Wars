import React, { useState, useEffect } from 'react';
import axios from "axios";
import CharacterCard from "./components/CharacterCard";
import { Container } from 'semantic-ui-react'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [peopleList, setPeopleList] = useState([]);
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
      .then(response => setPeopleList(response.data.results))
      .catch(error => console.log("Error ", error))
  }, [])

  console.log(peopleList);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
        {peopleList.map((item, iterator) => {
          return <CharacterCard name={item.name} birth={item.birth_year} height={item.height} mass={item.mass} key={iterator} />
        })}
      </Container>
    </div>
  );
}

export default App;
