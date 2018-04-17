import { Sickness } from '../models';

export default {
  /**
   * getAllSickness - get all symptoms
   * @param {object} req - incoming sickness object
   * @param {object} res - server response object
   * @return {json} - returns json format response
   */
  getAllSickness(req, res) {
    res.status(200).send({
      message: 'here are all sickness'
    })
  }
  
}