import axios from 'axios';
import { GET_SICKNESS } from './types';

/**
 * getSymtoms user from the database
 * @function getSymtoms
 * @param {string} username - the username of the user being searched.
 * @param {number} offset - the offset
 * @return {json} -  axios post response
 */
export const getSickness = () => (
  dispatch => axios.get('/api/v1/sickness/')
    .then((res) => {
      dispatch({ type: GET_SICKNESS, sickness: res.data.sickness });
    })
);

