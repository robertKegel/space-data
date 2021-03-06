import { useState } from 'react';
import LaunchLibrary from '../../util/LaunchLibrary';
import Results from '../Common/Results';
import SearchBar from '../Common/SearchBar';
import AgencyPage from './AgencyPage';

export default function Agencies() {
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
  const [ agency, setAgency ] = useState({
    agency: null
  })

  function handleSearchChange(e) {
    setSearch((prev) => { return {...prev, ...{ term: e.target.value }}});
  }

  function handleSearchKeydown(e) {
    let isEnter = e.code ? e.code.includes('Enter') : false;
    if (isEnter) {
      getAgencyList();
    }
  }

  async function getAgencyList() {
    setSearch((prev) => { return {...prev, ...{ searching: true }}})
    await LaunchLibrary.search('agencies', search.term)
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

  function getAgency(id) {
    LaunchLibrary.getById('agencies', id)
      .then((data) => {
        setAgency((prev) => { return {...prev, ...{ agency: data }}})
      })
      .then(() => {
        let agencyDiv = document.getElementById('agency');
        if (agencyDiv) {
          agencyDiv.scrollTop = 0;
        }
      })
  }

  function getAgencyPage(url) {
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

  if (agency.agency) {
    return (
      <AgencyPage agency={agency.agency} setAgency={setAgency} />
    )
  } else {
    return (
      <div>
        <SearchBar 
          searchForTerm={getAgencyList} 
          handleSearchKeydown={handleSearchKeydown} 
          handleSearchChange={handleSearchChange} 
          search={search}
        />
        <Results results={results} getById={getAgency} getPage={getAgencyPage} />
      </div>
    );
  }
}