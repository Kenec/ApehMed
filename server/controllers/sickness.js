import { Sicknesses } from '../models';

export default {
  /**
   * getAllSickness - get all sickness
   * @param {object} req - incoming sickness object
   * @param {object} res - server response object
   * @return {json} - returns json format response
   */
  getAllSickness(req, res) {
    Sicknesses.findAll({
      attributes: ['id', 'sickness', 'symptoms', 'description', 'contracting']
    }).then((sickness) => {
      if (sickness.length === 0) {
        return res.status(404).send({
          message: 'sickness not found'
        });
      }
      return res.status(200).send({ sickness });
    }).catch((error) => {
      return res.status(500).send({
        error,
        message: 'cannot fetch sickness due to server error'
      });
    })
  },

   /**
   * getOneSickness - get one sickness
   * @param {object} req - incoming sickness object
   * @param {object} res - server response object
   * @return {json} - returns json format response
   */
  getOneSickness(req, res) {
    Sicknesses.findOne({
      attributes: ['id', 'sickness', 'symptoms', 'description', 'contracting'],
      where: {
        id: req.params.id
      }
    }).then((sickness) => {
      if (sickness === null) {
        return res.status(404).send({
          message: 'sickness not found'
        });
      }
      return res.status(200).send({ sickness });
    }).catch((error) => {
      return res.status(500).send({
        message: 'cannot fetch sickness due to server error'
      });
    })
  },

  /**
   * postSickness - add sickness to the database
   * @param {object} req - incoming sickness object
   * @param {object} res - server response object
   * @return {json} - returns json format response
   */
  postSickness(req, res) {
    Sicknesses.findOne({
      where: {
        sickness: req.body.sickness
      }
    }).then((result) => {
      if(result === null){
        Sicknesses.create({
          sickness: req.body.sickness,
          symptoms: req.body.symptoms,
          description: req.body.description,
          contracting: req.body.contracting,
          causes: req.body.causes
        }).then((sicknessInsert) => {
          if(sicknessInsert) {
            res.status(201).send({
              id: sicknessInsert.id,
              sickness: sicknessInsert.sickness,
              symptoms: sicknessInsert.symptoms,
              description: sicknessInsert.description,
              contracting: sicknessInsert.contracting,
              causes: sicknessInsert.causes
            });
          }
        }).catch((error) => {
          res.status(500).send({
            error,
            message: 'Cannot create sickness due to server error'
          });
        })
      } else {
        res.status(409).send({
          message: 'Sickness already exists'
        })
      }
    }).catch(() => {
      res.status(500).send({
        message: 'Cannot post sickness due to server errors'
      })
    });
  },

  /**
   * updateSickness - protected controller for updating exiting sickness by the admin
   * @param {object} req - incoming sickness object 
   * @param {object} res - response
   * @return {json} - return json format as a response
   */
  updateSickness(req, res) {
    Sicknesses.findOne({
      where: {
        id: req.params.id
      }
    }).then((result) => {
      if(result !== null) {
        Sicknesses.update({
          sickness: req.body.sickness || result.sickness,
          symptoms: req.body.symptoms || result.symptoms,
          description: req.body.description || result.description,
          contracting: req.body.contracting || result.contracting,
          causes: req.body.causes || result.causes,
        }, {
          where: {
            id: req.params.id
          }
        }).then((update) => {
          if (update) {
            res.status(201).send({
              message: 'Sickness updated'
            });
          } else {
            res.status(501).send({
              message: 'Unable to update sickness'
            });
          }
        }).catch((error) => {
          res.status(500).send({
            error,
            message: 'Cannot update sickness due to server error'
          });
        })
      } else {
        res.status(404).send({
          message: 'No sickness with the id specified'
        });
      }
    }).catch(() => {
      res.status(500).send({
        message: 'Cannot update sickness'
      });
    })
  },

  /**
   * deleteSickness - protected controller for deleting exiting sickness by the admin
   * @param {object} req - incoming sickness object 
   * @param {object} res - response
   * @return {json} - return json format as a response
   */
  deleteSickness(req, res) {
    Sicknesses.findOne({
      where: {
        id: req.params.id
      }
    }).then((result) => {
      if(result !== null) {
        Sicknesses.destroy({
          where: {
            id: req.params.id
          }
        }).then((deleteSickness) => {
          if (deleteSickness === 1) {
            res.status(200).send({
              message: 'Sickness Removed!'
            });
          } else {
            res.status(501).send({
              message: 'Sickness was unable to be deleted'
            });
          }
        }).catch(() => {
          res.status(500).send({
            message: 'Cannot delete sickness due to server error'
          });
        })
      } else {
        res.status(404).send({
          message: 'No sickness with the id specified'
        });
      }
    }).catch(() => {
      res.status(500).send({
        message: 'Cannot delete sickness'
      });
    })
  }
  
}