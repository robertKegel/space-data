import AgenciesSearch from "../AgenciesSearch/AgenciesSearch";
import Events from "../Events/Events";
import { Grid } from "@material-ui/core";
import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={3} >
        <Grid item sm={5} >
          <Events />
        </Grid>
        <Grid item sm={7} >
          <AgenciesSearch />
        </Grid>
      </Grid>
    </React.Fragment>
    
  );
}

export default App;
