import notifications from './notifications';
import contriesList from '../templates/contries-list.hbs';
import countryInfo from '../templates/contry-info.hbs';
import refs from './refs';

function updateMarkup(array) {
    if (array === undefined) {
        return
    }
    if (array.length > 10) {
        // console.log(array.length);
        notifications.onOverflowRespose();
    } else if (array.length <= 10 && array.length !== 1 && array.length !== 0 && array.length !== null) {
        refs.listContainerRef.innerHTML = '';
        // console.log(array);
        const contriesListTemplate = contriesList(array);
        // console.log(contriesListTemplate);
        refs.listContainerRef.insertAdjacentHTML('beforeend', contriesListTemplate);
    } else if (array.length === 1) {
        // console.dir(refs.listContainerRef.children);
        refs.listContainerRef.innerHTML = '';
        // console.log(array);
        const countryInfoTemplate = countryInfo(array);
        refs.listContainerRef.insertAdjacentHTML('beforeend', countryInfoTemplate);
    } else {
        console.log(array);
        notifications.onNotFound();
    }
};

export default updateMarkup;