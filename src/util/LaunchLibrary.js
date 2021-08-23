const BASE_URL = 'https://ll.thespacedevs.com/2.0.0';

const LaunchLibrary = {
  getAgencyList(searchTerm=null) {
    // route /agencies/
    let route = BASE_URL + '/agencies/';
    if (searchTerm) {
      route += '?search=' + searchTerm;
    }
    return fetch(route)
      .then(response => response.json())
  }
}

export default LaunchLibrary;