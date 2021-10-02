import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ResultsBar(props) {

  let isNext = props.results.next !== null;
  let isBack = props.results.previous !== null;
  let isResults = props.results.results.length >= 0;


  return (
    <div className='results-bar'>
      <Button
        className={ isBack ? 'arrow' : 'hidden' } 
        onClick={() => { props.getPage(props.results.previous) }}
      >
        <Typography variant='overline' >
          <ArrowBackSharpIcon />
          Prev
        </Typography>
      </Button>
            
      <Typography 
        variant='subtitle1'
        className={ isResults ? 'results-count' : 'hidden' }
      >
        Results: {props.results.count}
      </Typography>
        
      <Button
        className={ isNext ? 'arrow' : 'hidden' } 
        onClick={() => { props.getPage(props.results.next) }}
      >
        <Typography variant='overline' >
          Next
          <ArrowForwardSharpIcon />
        </Typography>
      </Button>
    </div>
  )
}