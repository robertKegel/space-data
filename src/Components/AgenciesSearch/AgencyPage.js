import { Paper, Typography, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, Grid, Divider, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  }
}));

export default function AgencyPage(props) {

  const classes = useStyles();

  if (!props.agency.image_url) {
    props.agency.image_url = 'https://photographyproject.uk/wp-content/uploads/2019/11/sombrero-galaxy-scaled.jpg'
  }

  return (
    <Paper className='agencies agencypage' id='agency'>
      
      <Button onClick={() => {props.setAgency((prev) => {return {...prev, ...{ agency: null }}})}}>Back to results</Button>
      
      <Paper>
        <img src={props.agency.image_url} width='100%' alt={props.agency.name}></img>
        <Typography variant='h4' align='center' className='agencypage-indent'>{props.agency.name.toUpperCase()}</Typography>
        <Divider />
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center" >
          <Grid item xs={6}>
          <a href={props.agency.info_url}>
            <div className='agencypage-links'>
              <img src={props.agency.logo_url} alt={props.agency.name}></img>
            </div>
          </a>
          </Grid>
          <Grid item xs={6}>
          <a href={props.agency.wiki_url}>
            <div className='agencypage-links'>
              <img src='https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/800px-Wikipedia-logo-v2.svg.png' 
                width='96px' 
                height='96px' 
                alt='Wikipedia'
              />  
            </div>
          </a>
          </Grid>
        </Grid>
        <Divider />
        <Typography variant='body2' gutterBottom className='agencypage-indent'>
          {props.agency.country_code.length > 3 ? 'Countries:' : 'Country:'} {props.agency.country_code}
        </Typography>
        <Typography variant='body1' gutterBottom className='agencypage-indent'>
          {props.agency.description}
        </Typography>
      </Paper>

      <Grid container spacing={3} alignContent='space-around'>
        <Grid item xs={12} sm={6}>
        <Paper className='agencypage-stats'>
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
        <Paper className='agencypage-stats'>
          <Typography variant='h6' align='center'>Landing Statistics</Typography>
          <List>
            <ListItem>Attempted Landings: {props.agency.attempted_landings}</ListItem>
            <ListItem>Successful Landings: {props.agency.successful_landings}</ListItem>
            <ListItem>Consecutive Successful Landings: {props.agency.consecutive_successful_landings}</ListItem>
            <ListItem>Failed Landings: {props.agency.failed_launches}</ListItem>
          </List>
        </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper>
            <img src={props.agency.nation_url} width='100%' alt={props.agency.country_code}></img>
            <Divider />
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='launcher-content' id='launcher-header'>
                <Typography variant='h4' align='center'>Launchers</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                {props.agency.launcher_list.map((launcher, index, array) => {
                  let isLastLauncher = index === array.length - 1;
                  return (
                    <div>
                    <ListItem alignItems='center' id={launcher.id.toString()}>
                      <ListItemAvatar>
                        {launcher.image_url ? <Avatar src={launcher.image_url} alt={launcher.name} variant='rounded' className={classes.large} /> : ''}
                      </ListItemAvatar>
                      <ListItemText 
                        primary={launcher.name}
                        secondary={launcher.description}
                      />
                    </ListItem>
                    { isLastLauncher ? '' : <Divider /> }
                    </div>
                    
                  )
                })}
                </List>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item xs={12}>
            <Paper>
              <img src={props.agency.logo_url} width='100%' alt={props.agency.name}></img>
              <Divider />
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='spacecraft-content' id='spacecraft-header'>
                  <Typography variant='h4' align='center'>Spacecraft</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {props.agency.spacecraft_list.map((spacecraft, index, array) => {
                      let isLastSpacecraft = index === array.length - 1;
                      return (
                        <div>
                          <ListItem id={spacecraft.id.toString()}>
                            <ListItemAvatar>
                              {spacecraft.image_url ? <Avatar src={spacecraft.image_url} alt={spacecraft.name} variant='rounded' className={classes.large} /> : ''}
                            </ListItemAvatar>
                            <ListItemText 
                              primary={spacecraft.name}
                              secondary={spacecraft.history}
                            />
                          </ListItem>
                          { isLastSpacecraft ? '' : <Divider />}
                        </div>
                      )
                    })}
                  </List>
                </AccordionDetails>
              </Accordion>
            </Paper>
        </Grid>

      </Grid>
    </Paper>
  )
}