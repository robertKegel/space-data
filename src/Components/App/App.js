import AgenciesSearch from "../AgenciesSearch/AgenciesSearch";
import Events from "../Events/Events";
import { Grid, Hidden } from "@material-ui/core";
import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container justifyContent='space-around'>
        <Hidden only={['xs', 'sm']}>
        <Grid item xs={10} md={5}>
          <Events />
        </Grid>
        </Hidden>
        <Grid item xs={10} md={7}>
          <AgenciesSearch />
        </Grid>
      </Grid>
    </React.Fragment>
    
  );
}

export default App;
