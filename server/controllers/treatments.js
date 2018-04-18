import { Treatments, Sicknesses } from '../models';

export default {
  /**
   * getTreatment - get treatment based on the sickness id
   * @param {object} req - incoming treatment object
   * @param {object} res - server response object
   * @return {json} - returns json format response
   */
  getTreatment(req, res) {
    Treatments.findAll({
      include: [{
        model: Sicknesses,
        as: 'Sicknesses',
        attributes: ['id', 'sickness', 'symptoms'],
      }],
      attributes: ['id', 'treatment', 'SicknessesId']
    }).then((treatments) => {
      if (treatments.length === 0) {
        return res.status(404).send({
          message: 'treatments not found'
        });
      }
      return res.status(200).send({ treatments });
    })
  },

  /**
   * getOneTreatment - get one treatment
   * @param {object} req - incoming treatment object
   * @param {object} res - server response object
   * @return {json} - returns json format response
   */
  getOneTreatment(req, res) {
    Treatments.findOne({
      include: [{
        model: Sicknesses,
        as: 'Sicknesses',
        attributes: ['id', 'sickness', 'symptoms'],
      }],
      attributes: ['id', 'treatment', 'SicknessesId'],
      where: {
        id: req.params.id
      }
    }).then((treatments) => {
      if (treatments === null) {
        return res.status(404).send({
          message: 'treatments not found'
        });
      }
      return res.status(200).send({ treatments });
    }).catch((error) => {
      return res.status(500).send({
        message: 'cannot fetch treatments due to server error'
      });
    })
  },

  /**
   * postTreatment - protected controller for adding treatment by the admin
   * @param {object} req - incoming treatment object 
   * @param {object} res - response
   * @return {json} - return json format as a response
   */
  postTreatment(req, res) {
    Treatments.findOne({
      where: {
        treatment: req.body.treatment
      }
    }).then((result) => {
      if(result === null){
        Treatments.create({
          treatment: req.body.treatment,
          SicknessesId: req.body.sicknessId
        }).then((treatments) => {
          if(treatments) {
            res.status(201).send({
              id: treatments.id,
              treatment: treatments.treatment,
              sicknessId: treatments.SicknessesId
            });
          }
        }).catch((error) => {
          res.status(500).send({
            error,
            message: 'Cannot create treatment due to server error'
          });
        })
      } else {
        res.status(409).send({
          message: 'Treatment already exists'
        })
      }
    }).catch((error) => {
      res.status(500).send({
        error,
        message: 'Cannot post treatment due to server errors'
      })
    });
  },

  /**
   * updateTreatment - protected controller for updating exiting treatment by the admin
   * @param {object} req - incoming treatment object 
   * @param {object} res - response
   * @return {json} - return json format as a response
   */
  updateTreatment(req, res) {
    Treatments.findOne({
      where: {
        id: req.params.id
      }
    }).then((result) => {
      if(result !== null) {
        Treatments.update({
          treatment: req.body.treatment,
          SicknessesId: req.body.sicknessId
        }, {
          where: {
            id: req.params.id
          }
        }).then((update) => {
          if (update) {
            res.status(201).send({
              message: 'Treatment updated'
            });
          } else {
            res.status(501).send({
              message: 'Unable to update treatment'
            });
          }
        }).catch(() => {
          res.status(500).send({
            message: 'Cannot update treatment due to server error'
          });
        })
      } else {
        res.status(404).send({
          message: 'No treatment with the id specified'
        });
      }
    }).catch(() => {
      res.status(500).send({
        message: 'Cannot update treatment'
      });
    })
  },

  /**
   * deleteTreatment - protected controller for deleting exiting treatment by the admin
   * @param {object} req - incoming treatment object 
   * @param {object} res - response
   * @return {json} - return json format as a response
   */
  deleteTreatment(req, res) {
    Treatments.findOne({
      where: {
        id: req.params.id
      }
    }).then((result) => {
      if(result !== null) {
        Treatments.destroy({
          where: {
            id: req.params.id
          }
        }).then((deleteTreatment) => {
          if (deleteTreatment === 1) {
            res.status(200).send({
              message: 'Treatment Removed!'
            });
          } else {
            res.status(501).send({
              message: 'Treatment was unable to be deleted'
            });
          }
        }).catch(() => {
          res.status(500).send({
            message: 'Cannot delete treatment due to server error'
          });
        })
      } else {
        res.status(404).send({
          message: 'No treatment with the id specified'
        });
      }
    }).catch(() => {
      res.status(500).send({
        message: 'Cannot delete treatment'
      });
    })
  }
}
