import { TextField, Button, Paper } from '@material-ui/core';

export default function SearchBar(props) {
  
  let searchButtonText = props.search.searching ? "Searching..." : "Search";

  return (
    <Paper className='agencies'>
      <TextField 
        id="agencies-search" 
        label="Search" 
        variant="outlined" 
        onChange={props.handleSearchChange} 
        onKeyDown={props.handleSearchKeydown}
        value={props.search.term}
        fullWidth
      />
      <Button 
        fullWidth 
        color='primary' 
        variant="outlined" 
        onClick={props.searchForTerm}
      >
        { searchButtonText }
      </Button>
    </Paper>
  )
}