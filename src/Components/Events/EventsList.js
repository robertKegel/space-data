import { List, ListItem, ListItemText, Divider } from '@material-ui/core';

export default function EventsList(props) {
  

  return (
    <List className ='events-list'>
        {props.upcomingEvents ? props.upcomingEvents.map( (event, index, array) => {

          const eventDate = new Date(event.date).toLocaleString('en-US');
          event.date = eventDate;

          const isLast = index === array.length - 1;
          
          return (
            <div>
            <ListItem>
              <ListItemText
                primary={event.date}
                secondary={event.description}
              />
            </ListItem>
            { isLast ? null : <Divider /> }
            </div>
            
          )
        }) : null }
      </List>
  )
}