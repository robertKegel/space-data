import { useState } from 'react';
import { TextField, Button, Paper } from '@material-ui/core';
import LaunchLibrary from '../../util/LaunchLibrary';
import AgenciesResults from './AgenciesResults';

function AgenciesSearch() {
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

  async function getAgencyList() {
    
    let data = await LaunchLibrary.getAgencyList(search.term);
    setResults((prev) =>{ return {...prev, ...{
      count: data.count,
      next: data.next,
      previous: data.previous,
      results: data.results
    }}})
  }

  return (
    <div>
      <Paper class='agencies-search'>
        <TextField 
          id="agencies-search" 
          label="Search" 
          variant="outlined" 
          onChange={handleSearchChange} 
          onKeyDown={handleSearchKeydown}
          value={search.term}
          fullWidth
        />
        <Button fullWidth color='primary' variant="outlined" onClick={getAgencyList}>Search</Button>
      </Paper>
      <Paper className='agencies-results'>
        <AgenciesResults results={results.results} />
      </Paper>
    </div>
  );
}

export default AgenciesSearch;