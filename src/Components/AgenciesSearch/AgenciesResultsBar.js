import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import Typography from '@material-ui/core/Typography';

export default function AgenciesResultsBar(props) {

  let isNext = props.results.next !== null;
  let isBack = props.results.previous !== null;
  let isResults = props.results.results.length > 0;


  return (
    <div className='results-bar'>
      <ArrowBackSharpIcon 
        className={ isBack ? 'arrow' : 'hidden' } 
        onClick={() => { props.getAgencyPage(props.results.previous) }}
      />
      <Typography 
        variant='subtitle1'
        className={ isResults ? 'results-count' : 'hidden' }
      >
        Results: {props.results.count}
      </Typography>
        
      <ArrowForwardSharpIcon 
        className={ isNext ? 'arrow' : 'hidden' } 
        onClick={() => { props.getAgencyPage(props.results.next) }}
      />
    </div>
  )
}