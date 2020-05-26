import axios from 'axios';
import {baseUrl} from 'configs';

const domain = window.location.href;

export default axios.create({
    baseURL: `${domain}${baseUrl}`,
    responseType: 'json'
});
