import {
  LOGIN_ACCOUNT,
  LOGIN_ACCOUNT_FAIL,
  LOGIN_ACCOUNT_SUCCESS,
  REGISTER_ACCOUNT,
  REGISTER_ACCOUNT_FAIL,
  REGISTER_ACCOUNT_SUCCESS,
} from "../constants";

export const registerReducer = (
  state = { acntInfo: {}, loading: false, error: "" },
  action
) => {
  switch (action.type) {
    // register
    case REGISTER_ACCOUNT:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_ACCOUNT_SUCCESS:
      return {
        ...state,
        acntInfo: action.payload,
        loading: false,
        error: "",
      };
    case REGISTER_ACCOUNT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //login

    case LOGIN_ACCOUNT:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_ACCOUNT_SUCCESS:
      return {
        ...state,
        acntInfo: action.payload,
        loading: false,
        error: "",
      };
    case LOGIN_ACCOUNT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
