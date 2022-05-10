import axios from "axios";

import { transfersActions } from "../slices/transfers.slice";

const API_URL = "http://localhost:4002/api/v1";

export const getUsersTransfers = (userId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${API_URL}/users/${userId}/history`);
      // console.log(res.data.transfersUsers);
      const { transfersUsers } = res.data;
      console.log(transfersUsers);
      dispatch(transfersActions.getTransfers({ transfersUsers }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const newTransfer = (accountNumberUsers, accountNumber, amount) => {
  return async (dispatch) => {
    try {
      console.log(accountNumberUsers);
      console.log(accountNumber);
      const transferData = { senderUserId: 1, amount, receiverUserId: 2 };
      const res = await axios.post(`${API_URL}/transfers`, transferData);

      const { newTransfer } = res.data;

      dispatch(transfersActions.newTransfer({ newTransfer }));
    } catch (error) {
      console.log(error);
    }
  };
};
