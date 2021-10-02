import { Paper, Typography, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, Grid, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  small: {
    width: '24px',
    height: '24px',
  },
  large: {
    width: '48px',
    height: '48px',
  }
}));

export default function AstronautPage(props) {

  const classes = useStyles();

  if (!props.astronaut.image_url) {
    props.astronaut.image_url = 'https://photographyproject.uk/wp-content/uploads/2019/11/sombrero-galaxy-scaled.jpg'
  }

  return (
    <Paper className='agencies agencypage' id='astronaut'>
      
      <Button onClick={() => {props.setAstronaut((prev) => {return {...prev, ...{ astronaut: null }}})}}>Back to results</Button>
      
      <Paper>
        <img src={props.astronaut.profile_image} width='100%' alt={props.astronaut.name}></img>
        <Typography variant='h4' align='center' >{props.astronaut.name.toUpperCase()}</Typography>
        <Divider />
        <Grid container spacing={0} direction="row">
          <Grid item xs={4}>
          <a href={props.astronaut.twitter ? props.astronaut.twitter : "https://twitter.com"}>
            <img 
              src={"/images/Twitter-square-blue.png"} 
              alt={props.astronaut.name} 
              width="48px" 
              height="48px"
            />
          </a>
          </Grid>
          <Grid item xs={4}>
          <a href={props.astronaut.instagram ? props.astronaut.instagram : "https://instagram.com"}>
            <img 
              src={"/images/Instagram_Glyph_Gradient_RGB.png"} 
              alt={props.astronaut.name} 
              width="48px" 
              height="48px" 
            />
          </a>
          </Grid>
          <Grid item xs={4}>
          <a href={props.astronaut.wiki}>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/800px-Wikipedia-logo-v2.svg.png' 
              alt='Wikipedia'
              width='48px' 
              height='48px' 
            />
          </a>
          </Grid>
        </Grid>
        <Divider />
        <Typography variant='body1' align='left' gutterBottom className='agencypage-indent'>
          {props.astronaut.bio}
        </Typography>
      </Paper>
{/*
      <Grid container spacing={3} alignContent='space-around'>

        <Grid item xs={12}>
          <Paper>
            <img src={props.astronaut.nation_url} width='100%' alt={props.astronaut.country_code}></img>
            <Divider />
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='launcher-content' id='launcher-header'>
                <Typography variant='h4' align='center'>Launchers</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                {props.astronaut.launcher_list.map((launcher, index, array) => {
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
              <img src={props.astronaut.logo_url} width='100%' alt={props.astronaut.name}></img>
              <Divider />
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='spacecraft-content' id='spacecraft-header'>
                  <Typography variant='h4' align='center'>Spacecraft</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {props.astronaut.spacecraft_list.map((spacecraft, index, array) => {
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

      </Grid> */}
    </Paper>
  )
}