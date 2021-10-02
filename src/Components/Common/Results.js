import React from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import ResultsBar from './ResultsBar';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '600px'
  },
  inline: {
    display: 'inline',
  }
}));

export default function Results(props) {
  const classes = useStyles();

  return (
  <Paper className='agencies results' id='results'>
    <ResultsBar results={props.results} getPage={props.getPage} />
    <List className={classes.root}>
    {props.results.results.map((result, index, array) => {
      let isLast = index === array.length - 1;

      if (!result.description && result.bio) {
        result.description = result.bio;
      } else if (!result.description){
        result.description = "No description";
      }
      
      if (result.description.length > 150) {
        result.description = result.description.slice(0, 150).concat('...');
      }

      if (!result.image_url && result.profile_image_thumbnail) {
        result.image_url = result.profile_image_thumbnail;
      } else if (!result.image_url) {
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
        <div onClick={ () => { props.getById(result.id) } }>
          <ListItem className='results-item' alignItems="flex-start" key={result.id.toString()}>
            <ListItemAvatar>
              <Avatar variant='rounded' alt={result.name} src={result.image_url}>
                {result.avatar}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={result.name}
              secondary={result.description}
            />
          </ListItem>
          { isLast ? '' : <Divider />}
        </div> 
      )
    })}
    </List>
    {props.results.count ? <ResultsBar results={props.results} getPage={props.getPage} /> : null}
  </Paper>  
  )
}