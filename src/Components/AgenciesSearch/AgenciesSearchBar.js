import { TextField, Button, Paper } from '@material-ui/core';

export default function AgenciesSearchBar(props) {
  
  return (
    <Paper className='agencies-search'>
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
        onClick={props.getAgencyList}
      >
        Search
      </Button>
    </Paper>
  )
}