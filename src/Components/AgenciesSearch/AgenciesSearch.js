import { useState } from 'react';
import LaunchLibrary from '../../util/LaunchLibrary';
import AgenciesResults from './AgenciesResults';
import AgenciesSearchBar from './AgenciesSearchBar';
import AgencyPage from './AgencyPage';

export default function AgenciesSearch() {
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
    let isEnter = e.code.includes('Enter');
    if (isEnter) {
      getAgencyList();
    }
  }

  async function getAgencyList() {
    setSearch((prev) => { return {...prev, ...{ searching: true }}})
    await LaunchLibrary.getAgencyList(search.term)
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
    LaunchLibrary.getAgency(id)
      .then((data) => {
        setAgency((prev) => { return {...prev, ...{ agency: data }}})
      })
  }

  function getAgencyPage(url) {
    LaunchLibrary.getAgencyPage(url)
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
        <AgenciesSearchBar 
          getAgencyList={getAgencyList} 
          handleSearchKeydown={handleSearchKeydown} 
          handleSearchChange={handleSearchChange} 
          search={search}
        />
        <AgenciesResults results={results} getAgency={getAgency} getAgencyPage={getAgencyPage} />
      </div>
    );
  }
}