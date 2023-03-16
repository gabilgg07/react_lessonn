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
import API from "../api/api";
import typicodeApi from "../api/typicodeApi";
import renderApi from "../api/renderApi";

export const fetchCoders = () => async (dispatch) => {
  dispatch({ type: FETCH_CODERS_REQUEST });

  try {
    const { data } = await API.get("/students");

    dispatch({
      type: FETCH_CODERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_CODERS_FAIL,
      payload: error,
    });
  }
};

export const deleteCoder = (id) => async (dispatch) => {
  dispatch({ type: DELETE_CODERS_REQUEST });

  try {
    await API.delete(`/students/${id}`);

    dispatch({
      type: DELETE_CODERS_SUCCESS,
    });

    dispatch(fetchCoders());
  } catch (error) {
    dispatch({
      type: DELETE_CODERS_FAIL,
      payload: error,
    });
  }
};

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USERS_REQUEST });

  try {
    const { data } = await typicodeApi.get("/users");

    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_USERS_FAIL,
      payload: error,
    });
  }
};

// STUDENTS

export const fetchStudents = () => async (dispatch) => {
  dispatch({ type: FETCH_STUDENTS_REQUEST });

  try {
    const { data } = await renderApi.get("/students");

    dispatch({
      type: FETCH_STUDENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_STUDENTS_FAIL,
      payload: error,
    });
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  dispatch({ type: DELETE_STUDENT_REQUEST });

  try {
    await renderApi.delete(`/students/${id}`);

    dispatch({
      type: DELETE_STUDENT_SUCCESS,
    });

    dispatch(fetchStudents());
  } catch (error) {
    dispatch({
      type: DELETE_STUDENT_FAIL,
      payload: error,
    });
  }
};

export const editStudent = (data) => async (dispatch) => {
  dispatch({ type: EDIT_STUDENT_REQUEST });

  try {
    await renderApi.put(`/students/${data.id}`, data);

    dispatch({
      type: EDIT_STUDENT_SUCCESS,
    });

    dispatch(fetchStudents());
  } catch (error) {
    dispatch({
      type: EDIT_STUDENT_FAIL,
      payload: error,
    });
  }
};

export const addStudent = (data) => async (dispatch) => {
  dispatch({ type: ADD_STUDENT_REQUEST });

  try {
    await renderApi.post("/students", data);

    dispatch({
      type: ADD_STUDENT_SUCCESS,
    });

    dispatch(fetchStudents());
  } catch (error) {
    dispatch({
      type: ADD_STUDENT_FAIL,
      payload: error,
    });
  }
};
