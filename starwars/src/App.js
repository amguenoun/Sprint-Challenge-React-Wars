import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';
import CharacterCard from "./components/CharacterCard";
import { Container, Button } from 'semantic-ui-react'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [peopleData, setPeopleData] = useState({});
  const [peopleList, setPeopleList] = useState([]);
  const [link, setLink] = useState(`https://swapi.co/api/people/`);
  useEffect(() => {
    axios.get(link)
      .then(response => {
        setPeopleData(response.data);
        setPeopleList(response.data.results);
      })
      .catch(error => console.log("Error ", error))
  }, [link])

  const StyledContainer = styled(Container)`
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: space-around !important;
  `;

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Button primary onClick={() => { setLink(peopleData.previous) }}>Last Page</Button>
      <Button primary onClick={() => { setLink(peopleData.next) }}>Next Page</Button>
      <StyledContainer>
        {peopleList.map((item, iterator) => {
          const transport = item.vehicles.length + item.starships.length;
          return <CharacterCard name={item.name} birth={item.birth_year}
            height={item.height} mass={item.mass} key={iterator}
            species={item.species} home={item.homeworld} transport={transport} />
        })}
      </StyledContainer>
    </div>
  );
}

export default App;
