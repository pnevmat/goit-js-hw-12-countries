import refs from './refs';
import fetchCountries from './fetchCountries';
import updateMarkup from './update-contries-markup';
const debounce = require('lodash.debounce');

refs.inputRef.addEventListener('input', debounce(() => {
    fetchCountries(refs.inputRef.value)
    .then(data => updateMarkup(data))
}, 500))