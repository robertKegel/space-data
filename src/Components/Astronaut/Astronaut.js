import { useState } from 'react';
import LaunchLibrary from '../../util/LaunchLibrary';
import AstronautPage from './AstronautPage';
import SearchBar from '../Common/SearchBar';
import Results from '../Common/Results';


export default function Astronaut() {
  const [ search, setSearch ] = useState({
    term: "",
    searching: false,
  });
  const [ results, setResults ] = useState({
    count: null,
    next: null,
    previous: null,
    results: []
  })
  const [ astronaut, setAstronaut ] = useState({
    astronaut: null
  })

  function handleSearchChange(e) {
    setSearch((prev) => { return {...prev, ...{ term: e.target.value }}});
  }

  function handleSearchKeydown(e) {
    let isEnter = e.code ? e.code.includes('Enter') : false;
    if (isEnter) {
      searchForTerm();
    }
  }

  async function searchForTerm() {
    setSearch((prev) => { return {...prev, ...{ searching: true }}})
    await LaunchLibrary.search('astronaut', search.term)
      .then((data) => { 
        setResults((prev) => { return {...prev, ...{
          count: data.count,
          next: data.next,
          previous: data.previous,
          results: data.results
        }}})
      })
    setSearch((prev) => { return {...prev, ...{ searching: false }}})
  }

  function getById(id) {
    LaunchLibrary.getById('astronaut', id)
      .then((data) => {
        setAstronaut((prev) => { return {...prev, ...{ astronaut: data }}})
      })
      .then(() => {
        let astronaut = document.getElementById('astronaut');
        if (astronaut) {
          astronaut.scrollTop = 0;
        }
      })
  }

  function getPage(url) {
    LaunchLibrary.getPage(url)
      .then((data) => { 
        setResults((prev) => { return {...prev, ...{
          count: data.count,
          next: data.next,
          previous: data.previous,
          results: data.results
        }}})
      })
      .then(() => {
        let resultsDiv = document.getElementById('results');
        if (resultsDiv) {
          resultsDiv.scrollTop = 0;
        }
      })
  }

  if (astronaut.astronaut) {
    return (
      <AstronautPage astronaut={astronaut.astronaut} setAstronaut={setAstronaut} />
    )
  } else {
    return (
      <div>
        <SearchBar 
          searchForTerm={searchForTerm} 
          handleSearchKeydown={handleSearchKeydown} 
          handleSearchChange={handleSearchChange} 
          search={search}
        />
        <Results results={results} getById={getById} getPage={getPage} />
      </div>
    );
  }
}