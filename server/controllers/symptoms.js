import { Symptoms } from '../models';

export default {
  /**
   * GetAllSymptoms - get all symptoms
   * @param {object} req - incoming symptoms object
   * @param {object} res - server response object
   * @return {json} - returns json format response
   */
  getAllSymptoms(req, res) {
    Symptoms.findAll({
      attributes: ['id', 'symptoms']
    }).then((symptoms) => {
      if (symptoms.length === 0) {
        return res.status(404).send({
          message: 'symptoms not found'
        });
      }
      return res.status(200).send({ symptoms });
    })
  },

  /**
   * postSymptoms - protected controller for adding symptoms by the admin
   * @param {object} req - incoming syptoms object 
   * @param {object} res - response
   * @return {json} - return json format as a response
   */
  postSymptoms(req, res) {
    Symptoms.findOne({
      where: {
        symptoms: req.body.symptoms
      }
    }).then(result => {
      console.log(result);
      res.status(200).send({
        result
      })
    }).catch(() => {
      res.status(500).send({
        message: 'Cannot post symptoms due to server errors'
      })
    });
  }
}
