import { useState, useEffect } from 'react';
import { Divider, Paper, Typography } from '@mui/material';
import EventsList from './EventsList';
import LaunchLibrary from '../../util/LaunchLibrary';



export default function Events (props) {
  const [ upcomingEvents, setUpcomingEvents ] = useState();

  useEffect(() => {
    LaunchLibrary.getUpcomingEvents()
      .then((data) => { setUpcomingEvents(data.results) }, (error) => { console.log(error) } )
  });

  return(
    <Paper className='events' >
      <Typography variant='h5' align='center' color='primary' gutterBottom >
        Upcoming Events
      </Typography>
      <Divider />
      <EventsList upcomingEvents={upcomingEvents} />
    </Paper>
  )
}