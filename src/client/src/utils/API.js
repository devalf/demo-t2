import axios from 'axios';
import {BASE_URL} from 'configs';

/**
 * Rough solution but is used to force the development
 * probably in the future, it will be refactored to pass as ENV variable
 */
const {hostname, protocol} = window.location;
const domain = `${protocol}//${hostname}:${PORT_API_SERVER}/`;
const APIUrl = `${domain}${BASE_URL}`;

export default axios.create({
    baseURL: APIUrl,
    responseType: 'json'
});
