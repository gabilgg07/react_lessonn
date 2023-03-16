import {
  FETCH_CODERS_REQUEST,
  FETCH_CODERS_SUCCESS,
  FETCH_CODERS_FAIL,
  DELETE_CODERS_REQUEST,
  DELETE_CODERS_SUCCESS,
  DELETE_CODERS_FAIL,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAIL,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAIL,
  EDIT_STUDENT_REQUEST,
  EDIT_STUDENT_SUCCESS,
  EDIT_STUDENT_FAIL,
  ADD_STUDENT_REQUEST,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAIL,
} from "../constants/type";

export const coderReduces = (
  state = { coders: [], loading: false, error: "" },
  action
) => {
  switch (action.type) {
    case FETCH_CODERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CODERS_SUCCESS:
      return {
        ...state,
        coders: action.payload,
        loading: false,
      };
    case FETCH_CODERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_CODERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CODERS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_CODERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const userReduces = (
  state = { users: [], loading: false, error: "" },
  action
) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const studentReduces = (
  state = { students: [], loading: false, error: "" },
  action
) => {
  switch (action.type) {
    // get students
    case FETCH_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload,
        loading: false,
      };
    case FETCH_STUDENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // delete student
    case DELETE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // edit student
    case EDIT_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case EDIT_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // add student
    case ADD_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
