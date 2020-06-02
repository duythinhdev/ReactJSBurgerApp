import  axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-595ac.firebaseio.com/'
});

export default instance;