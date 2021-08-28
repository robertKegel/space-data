import { useState } from 'react';
import LaunchLibrary from '../../util/LaunchLibrary';
import AgenciesResults from './AgenciesResults';
import AgenciesSearchBar from './AgenciesSearchBar';

export default function AgenciesSearch() {
  const [ search, setSearch ] = useState({
    term: "",
    results: []
  });
  const [ results, setResults ] = useState({
    count: null,
    next: null,
    previous: null,
    results: []
  })

  function handleSearchChange(e) {
    setSearch((prev) =>{ return {...prev, ...{ term: e.target.value } }});
  }

  function handleSearchKeydown(e) {
    let isEnter = e.code.includes('Enter');
    if (isEnter) {
      getAgencyList();
    }
  }

  function getAgencyList() {
    LaunchLibrary.getAgencyList(search.term)
      .then((data) => { 
        setResults((prev) =>{ return {...prev, ...{
          count: data.count,
          next: data.next,
          previous: data.previous,
          results: data.results
        }}})
      })
  }

  return (
    <div>
      <AgenciesSearchBar 
        getAgencyList={getAgencyList} 
        handleSearchKeydown={handleSearchKeydown} 
        handleSearchChange={handleSearchChange} 
        search={search}
      />
      <AgenciesResults results={results.results} />
    </div>
  );
}