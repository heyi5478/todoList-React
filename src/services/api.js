import axios from 'axios';

const URL = import.meta.env.VITE_API_URL;
const Path = import.meta.env.VITE_API_PATH;
const apiURL = `${URL}api/${Path}`;
console.log(apiURL);

export const fetchTodo = () => {
  return axios(apiURL).then(({ data }) => data);
};

export const addTodo = (text) => {
  return axios(apiURL, {
    method: 'POST',
    data: { text },
  }).then(({ data }) => data);
};

// put -> 更新
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
