import notifications from './notifications';

function fetchCountries(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
    return fetch(url)
    .then(response => response.json())
    .catch(notifications.onError);
}

export default fetchCountries;