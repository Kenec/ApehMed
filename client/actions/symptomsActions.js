import axios from 'axios';
import { GET_SYMPTOMS } from './types';

/**
 * getSymtoms user from the database
 * @function getSymtoms
 * @param {string} username - the username of the user being searched.
 * @param {number} offset - the offset
 * @return {json} -  axios post response
 */
export const getSymptoms = () => (
  dispatch => axios.get('/api/v1/symptoms/')
    .then((res) => {
      dispatch({ type: GET_SYMPTOMS, symptoms: res.data.symptoms });
    })
);

