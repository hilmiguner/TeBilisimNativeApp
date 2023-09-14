import axios from 'axios';
// import UrlStore from '../../UrlStore';

const Url = "https://hayathaber.com/";
// const Url = "https://turkgun.com/";

export default axios.create({
    baseURL:`${Url}_api/`,
    headers: {token: '123456'}
});

// export default axios.create({
//     baseURL:`${UrlStore.URL}_api/`,
//     headers: {token: '123456'}
// });