import axios from 'axios';
import { API_URL } from '../config';

//// Selectors
export const getPosts = ({ posts }) => posts.data;
export const countPosts = ({ posts }) => posts.data.length;
export const getRequest = ({ posts }) => posts.request;

//// Thunks
export const loadPostsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/posts`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadPosts(res.data));
      dispatch(endRequest());
      // TESTING error message //////////////////////////////////////////
      throw new Error('TEST ERROR MESSAGE');
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

//// Initial state
const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null
  }
};

//// Actions
// action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

// action exports
export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POSTS:
      // TESTING no posts ////////////////////////////////////////////////
      return { ...statePart, data: action.payload /* data: [] */ };
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: null } };
    case END_REQUEST:
      // TESTING loading spinner //////////////////////////////////////////
      return { ...statePart, request: { pending: false /* pending: true */, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: true } };
    default:
      return statePart;
  }
}
