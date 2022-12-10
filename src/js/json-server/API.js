import { BASE_URL, REAL_API } from './constants.js';

export const getForeCast = () => {
    return axios.get(REAL_API)
    .then(response => response.data)
    .catch(error => console.log(error));
}

export const Sum = (a, b) => {
    return console.log(a + b);
}




