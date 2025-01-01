import axios from 'axios';

const apiURL = import.meta.env.VITE_API_URL;
// console.log(import.meta.env.VITE_API_URL);

export const fetchTodo = () => {
  return axios(apiURL).then(({ data }) => data);
};

export const addTodo = (text) => {
  return axios
    .post(apiURL, {
      method: 'POST',
      data: { text },
    })
    .then(({ data }) => data);
};

export const toggleTodo = (id) => {
  return axios({
    method: 'PUT',
    url: apiURL,
    data: { id },
  }).then(({ data }) => data);
};

export const deleteTodo = (id) => {
  return axios({
    method: 'DELETE',
    url: apiURL,
    data: { id },
  }).then(({ data }) => data);
};
