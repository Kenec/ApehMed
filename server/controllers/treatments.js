import { Treatments } from '../models';

export default {
  /**
   * getTreatment - get treatment based on the sickness id
   * @param {object} req - incoming sickness object
   * @param {object} res - server response object
   * @return {json} - returns json format response
   */
  getTreatment(req, res) {
    res.status(200).send({
      message: 'here are the treatment'
    });
  }
  
}