import { USER,CREATE_USER,DELETE_USER,GET_USER,UPDATE_USER } from './client/endpoints';
import { Axios } from './client/index';

export const getUsers = () => {
  return Axios.get(USER);
};
export const deleteUser = (id) => {
  return Axios.delete(`${DELETE_USER}/${id}`);
};
export const addUsers = (user) => {
  return Axios.post(CREATE_USER,user);
};
export const getSingleUser = (id) => {
  return Axios.get(`${GET_USER}/${id}`);
};
export const updateUsers = (id,user) => {
  return Axios.patch(`${UPDATE_USER}/${id}`,user);
};
