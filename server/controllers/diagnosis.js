import { Symptoms, Sicknesses } from '../models';
require('dotenv').config();

export default {
  /**
   * diagnosis - creates a diagnosis of sickness based on symptoms
   * @param {object} req - incoming symptoms object
   * @param {object} res - server response object of sickness and treatment
   * @return {json} - returns json format response
   */
  diagnosePatient(req, res) {
    let patienceSymptoms = req.body.symptoms;
    // patienceSymptoms = patienceSymptoms.split(',');
    
    Sicknesses.findAll({
      where: {
        symptoms: req.body.symptoms
      }
    }).then((result) => {
      res.status(200).send({
        result
      })
    }).catch(() => {
      res.status(500).send({
        message: 'Cannot diagnose you at the moment due to server error'
      })
    })
  }
}