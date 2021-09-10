import { useState, useEffect } from 'react';
import { Divider, Paper, Typography } from '@material-ui/core';
import EventsList from './EventsList';
import LaunchLibrary from '../../util/LaunchLibrary';



export default function Events (props) {
  const [ upcomingEvents, setUpcomingEvents ] = useState();

  useEffect(() => {
    LaunchLibrary.getUpcomingEvents()
      .then((data) => { setUpcomingEvents(data.results) }, (error) => { console.log(error) } )
  });

  return(
    <Paper className="events">
      <Typography variant='h4' align='center'>
        Upcoming Events
      </Typography>
      <Divider />
      <EventsList upcomingEvents={upcomingEvents} />
    </Paper>
  )
}