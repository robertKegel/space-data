import { Paper, Typography, Button, List, ListItem, Grid, Divider } from '@material-ui/core';

export default function AgencyPage(props) {

  if (!props.agency.image_url) {
    props.agency.image_url = 'https://photographyproject.uk/wp-content/uploads/2019/11/sombrero-galaxy-scaled.jpg'
  }

  return (
    <Paper className='agencies agencypage' id='agency'>
      <Button onClick={() => {props.setAgency((prev) => {return {...prev, ...{ agency: null }}})}}>Back to results</Button>
      <Paper>
        <img src={props.agency.image_url} width='100%' alt={props.agency.name}></img>
        <Typography variant='h3' align='center' className='agencypage-indent'>{props.agency.name}</Typography>
        <Divider />
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center" >
          <Grid item xs={6}>
          <div className='agencypage-links'>
            <a href={props.agency.info_url}>
              <img src={props.agency.logo_url} width='96px' alt={props.agency.name}></img>
            </a>
          </div>
          </Grid>
          <Grid item xs={6}>
          <div className='agencypage-links'>
            <a href={props.agency.wiki_url}>
              <img src='https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/800px-Wikipedia-logo-v2.svg.png' width='96px' height='96px' alt='Wikipedia'></img>
            </a>
          </div>
          </Grid>
        </Grid>
        <Divider />
        <Typography variant='body2' gutterBottom className='agencypage-indent'>{props.agency.country_code.length > 3 ? 'Countries:' : 'Country:'} {props.agency.country_code}</Typography>
        <Typography variant='body1' gutterBottom className='agencypage-indent'>{props.agency.description}</Typography>
      </Paper>

      <Grid container spacing={3} alignContent='space-around'>
        <Grid item xs={12} sm={6}>
        <Paper className='agencypage-stats agencypage-indent'>
          <Typography variant='h6' align='center'>Launch Statistics</Typography>
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
        <Paper className='agencypage-stats agencypage-indent'>
          <Typography variant='h6' align='center'>Landing Statistics</Typography>
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