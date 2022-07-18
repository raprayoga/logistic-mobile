import Axios from "axios";
import { API_URL } from 'multikurirkurir/src/constants/api';
import { _getData } from 'multikurirkurir/src/stores/asyncStore';

Axios.defaults.baseURL = API_URL

const setTokenBearer = async () => {
  const token = await _getData('@token')
  if (token !== undefined && token !== null) Axios.defaults.headers.common.Authorization = token
}

const get = (url) => {
  return Axios.get(url);
}

const post = (url, requestData) => {
  return Axios.post(url, requestData);
}

const put = (url, requestData) => {
  return Axios.put(url, requestData);
}

const deletes = (url) => {
  return Axios.delete(url);
}

export {
  get,
  post,
  put,
  deletes,
  setTokenBearer
}