import refs from './refs';
import fetchCountries from './fetchCountries';
import updateMarkup from './update-contries-markup';
const debounce = require('lodash.debounce');

refs.inputRef.addEventListener('input', debounce(event => {
    event.preventDefault();

    const inputValue = refs.inputRef.value;
    fetchCountries(inputValue)
    .then(data => updateMarkup(data))
}, 500))