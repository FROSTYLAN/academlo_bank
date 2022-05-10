import axios from "axios";

import { usersActions } from "../slices/user.slice";

const API_URL = "http://localhost:4002/api/v1/users";

export const login = (accountNumber, password) => {
  return async (dispatch) => {
    try {
      const loginData = { accountNumber, password };
      const res = await axios.post(`${API_URL}/login`, loginData);
      console.log(res.data);
      dispatch(usersActions.login());
    } catch (error) {
      console.log(error);
    }
  };
};

export const signup = (name, email, password) => {
  return async (dispatch) => {
    try {
      const signupData = { name, password };
      const res = await axios.post(`${API_URL}/signup`, signupData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch(usersActions.logout());
    } catch (error) {
      console.log(error);
    }
  };
};
