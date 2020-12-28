import fetchCountries from './fetchCountries';
import updateMarkup from './update-contries-markup';
const debounce = require('lodash.debounce');

const inputRef = document.querySelector('.js-input');

inputRef.addEventListener('input', debounce(() => {
    fetchCountries(inputRef.value)
    .then(data => updateMarkup(data))
}, 500))