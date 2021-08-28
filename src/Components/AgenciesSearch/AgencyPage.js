
export default function AgencyPage(props) {
  return (
    <div>
      <button onClick={() => {props.setAgency((prev) => {return {...prev, ...{ agency: null }}})}}>Back to results</button>
      <h1>{props.agency.name}</h1>
      <p>Country: {props.agency.country_code}</p>
      <a href={props.agency.info_url}>
        <img src={props.agency.image_url} height='300px' alt={props.agency.name}></img>
      </a>
      <br></br>
      <p>{props.agency.description}</p>
      <h3>Launch Statistics</h3>
      <ul>
        <li>Total Launches: {props.agency.total_launch_count}</li>
        <li>Successful Launches: {props.agency.successful_launches}</li>
        <li>Consecutive Successful Launches: {props.agency.consecutive_successful_launces}</li>
        <li>Failed Launches: {props.agency.failed_launches}</li>
        <li>Pending Launces: {props.agency.pending_launches}</li>
      </ul>
      <h3>Landing Statistics</h3>
      <ul>
        <li>Attempted Landings: {props.agency.attempted_landings}</li>
        <li>Successful Landings: {props.agency.successful_landings}</li>
        <li>Consecutive Successful Landings: {props.agency.consecutive_successful_landings}</li>
        <li>Failed Landings: {props.agency.failed_launches}</li>
      </ul>
    </div>
  )
}