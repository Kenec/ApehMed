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
    }).then((result) => {
      if(result === null){
        Symptoms.create({
          symptoms: req.body.symptoms
        }).then((symptom) => {
          if(symptom) {
            res.status(201).send({
              id: symptom.id,
              symptom: symptom.symptoms
            });
          }
        }).catch((error) => {
          res.status(500).send({
            message: 'Cannot create symptoms due to server error'
          });
        })
      } else {
        res.status(409).send({
          message: 'Symptoms already exists'
        })
      }
    }).catch(() => {
      res.status(500).send({
        message: 'Cannot post symptoms due to server errors'
      })
    });
  }
}
