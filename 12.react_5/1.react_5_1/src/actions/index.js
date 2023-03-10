import { FETCH_USERS } from "../constants/type";
import API from "../api/api";

// export const fetchUsers = () => {
//     return {
//       type: FETCH_USERS,
//       payload: [],
//     };
//   };

export const fetchUsers = () => async () => {
  const { data } = await API.get("/users");

  return {
    type: FETCH_USERS,
    payload: data,
  };
};
