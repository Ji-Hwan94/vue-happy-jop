import axios from 'axios';

export const axiosFun = (url, param) => {
    return axios.post(url, param);
};
