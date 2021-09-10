// Production URL
// const BASE_URL = 'https://ll.thespacedevs.com/2.0.0';

// Developer URL
const BASE_URL = 'https://lldev.thespacedevs.com/2.2.0';

const LaunchLibrary = {
  getAgencyList(searchTerm=null) {
    // route /agencies/
    let route = BASE_URL + '/agencies/';
    if (searchTerm) {
      route += '?search=' + searchTerm;
    }
    return fetch(route)
      .then(response => response.json())
  },
  getAgency(id) {
    let route = BASE_URL + '/agencies/' + id;
    return fetch(route)
      .then(response => response.json())
  },
  getAgencyPage(url) {
    let route = url;
    return fetch(route)
      .then(response => response.json())
  },
  getPage(url) {
    let route = url;
    return fetch(route)
      .then(response => response.json())
  },
  getUpcomingEvents() {
    let route = BASE_URL + '/event/upcoming/'
    return fetch(route)
      .then(response => response.json())
  }
}

export default LaunchLibrary;