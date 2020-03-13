import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/api/v1'
  });

  API.defaults.headers.post['Accept'] = 'application/json';
  API.defaults.headers.post['Content-Type'] = 'application/json';
  
  export const getCounters = () => {
    return API
      .get('/counters')
      .then(data => data.data);
  }
  
  export const addCounter = (title) => {
    return API
      .post('/counter', {title})
      .then(data => data.data);
  }
  
  export const increaseCounter = (idCounter) => {
    return API
      .post('/counter/inc', {id: idCounter})
      .then(data => data.data);
  }
  
  export const decreaseCounter = (idCounter) => {
    return API
      .post('/counter/dec',{id: idCounter})
      .then(data => data.data);
  }
  
  export const removeCounter = (idCounter) => {
    return API
      .delete('/counter/dec', {id: idCounter})
      .then(data => data.data);
  }
  
  export default {
    getCounters,
    addCounter,
    increaseCounter,
    decreaseCounter,
    removeCounter,
  };