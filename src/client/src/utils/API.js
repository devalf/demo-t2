import axios from 'axios';
import {BASE_URL, API_PORT} from 'configs';

/**
 * Very rough solution but is used to force the development
 * probably in the future, it will be refactored to pass as ENV variable
 */
const {hostname, protocol} = window.location;
const domain = `${protocol}//${hostname}:${API_PORT}/`;
const APIUrl = `${domain}${BASE_URL}`;

export default axios.create({
    baseURL: APIUrl,
    responseType: 'json'
});
