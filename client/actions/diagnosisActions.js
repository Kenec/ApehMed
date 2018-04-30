import axios from 'axios';
import { DIAGNOSE } from './types';

/**
 * diagnose user from the database
 * @function diagnose
 * @param {string} username - the username of the user being searched.
 * @param {number} offset - the offset
 * @return {json} -  axios post response
 */
export const diagnose = (symptoms) => (
  dispatch => axios.post('/api/v1/diagnosis/', { symptoms })
    .then((res) => {
      dispatch({ type: DIAGNOSE, diagnosis: res.data.diagnosedSickness });
    })
);

