import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  linkCursor: {
    cursor: 'pointer',
  }
}));

export default function AgenciesResults(props) {
  const classes = useStyles();

  return (
  <Paper className='agencies-results'>
    <List className={classes.root}>
    {props.results.map((result) => {
      if (!result.description){
        result.description = "No description";

      } else if (result.description.length > 150) {
        result.description = result.description.slice(0, 150).concat('...');
      }

      if (!result.image_url) {
        switch (result.type) {
          case 'Government':
            result.avatar = "🏛️";
            break;
          case 'Commercial':
            result.avatar = "🏢";
            break;
          case 'Multinational':
            result.avatar = "🏢";
            break;
          default:
            result.avatar = "🏢";
            break;
        }
      }

      return(
        <div onClick={ () => { props.getAgency(result.id)} }>
          <ListItem alignItems="flex-start" className={classes.linkCursor} key={result.id.toString()}>
            <ListItemAvatar>
              <Avatar variant='rounded' alt={result.abbrev} src={result.image_url}>
                {result.avatar}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={result.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Founded: {result.founding_year}
                  </Typography>
                  {" - "}{result.description}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider />
        </div> 
      )
    })}
    </List>
  </Paper>  
  )
}