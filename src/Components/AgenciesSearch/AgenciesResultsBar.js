import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';

export default function AgenciesResultsBar(props) {


  return (
    <div className='results-bar'>
      <ArrowBackSharpIcon />
      <p>Results: {props.results.count}</p>
      <ArrowForwardSharpIcon />
    </div>
  )
}