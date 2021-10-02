import Events from "../Events/Events";
import SearchSelector from '../SearchSelector/SearchSelector.js';
import Agencies from "../Agencies/Agencies";
import Astronaut from '../Astronaut/Astronaut';
import { Grid, Hidden } from "@mui/material";
import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  const [page, setPage] = React.useState('agencies');
  
  function changeSearch(selectedPage) {
    setPage(selectedPage)
  }

  const pages = {
    'agencies': <Agencies />,
    'astronaut': <Astronaut />
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12}>
          <SearchSelector changeSearch={changeSearch} pages={pages} page={page}/>
        </Grid>
        <Hidden only={['xs', 'sm']}>
          <Grid item md={5}>
            <Events />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={7}>
          {pages[page]}
        </Grid>
      </Grid>
    </React.Fragment>
    
  );
}

export default App;
