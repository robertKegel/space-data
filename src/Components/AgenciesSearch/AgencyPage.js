import { Paper, Typography, Button, List, ListItem, Grid } from '@material-ui/core';

export default function AgencyPage(props) {
  window.scrollTo(0,0);

  return (
    <Paper>
      <Button onClick={() => {props.setAgency((prev) => {return {...prev, ...{ agency: null }}})}}>Back to results</Button>
      <Paper>
        <Typography variant="h3">{props.agency.name}</Typography>
        <Typography variant="body1">Country: {props.agency.country_code}</Typography>
        <a href={props.agency.info_url}>
          <img src={props.agency.image_url} height='200px' alt={props.agency.name}></img>
        </a>
        <br></br>
        <p>{props.agency.description}</p>
      </Paper>

      <Grid container spacing={3} alignContent='space-around'>

        <Grid item xs={12} sm={6}>
        <Paper className='agencypage-stats'>
          <Typography variant='h6'>Launch Statistics</Typography>
          <List>
            <ListItem>Total Launches: {props.agency.total_launch_count}</ListItem>
            <ListItem>Successful Launches: {props.agency.successful_launches}</ListItem>
            <ListItem>Consecutive Successful Launches: {props.agency.consecutive_successful_launces}</ListItem>
            <ListItem>Failed Launches: {props.agency.failed_launches}</ListItem>
            <ListItem>Pending Launces: {props.agency.pending_launches}</ListItem>
          </List>
        </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
        <Paper className='agencypage-stats'>
          <Typography variant='h6'>Landing Statistics</Typography>
          <List>
            <ListItem>Attempted Landings: {props.agency.attempted_landings}</ListItem>
            <ListItem>Successful Landings: {props.agency.successful_landings}</ListItem>
            <ListItem>Consecutive Successful Landings: {props.agency.consecutive_successful_landings}</ListItem>
            <ListItem>Failed Landings: {props.agency.failed_launches}</ListItem>
          </List>
        </Paper>
        </Grid>

      </Grid>
      

      
    </Paper>
  )
}