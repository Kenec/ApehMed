import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Admins } from '../models';

require('dotenv').config();

export default {
  /**
   * AdminSignup - creates a new admin account
   * @param {object} req - incoming admin object
   * @param {object} res - server response object
   * @return {json} - returns json format response
   */
  adminSignup(req, res) {
    const saltRounds = 10;
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
    Admins.create({
       password: hash,
       email: req.body.email,
       role: req.body.role,
       token: req.body.token
    }).then((admin) => {
       const token = jwt.sign({
         id: admin.id,
         email: admin.email,
         role: admin.role
       }, process.env.JWT_SECRET, { expiresIn: '24h' });
       res.status(201).json({
         token,
         message: 'Account created successfully'
       });
    }).catch((error) => {
     res.status(500).json({
       message: 'Cannot create your account due to some server error!',
       error: error.errors[0].message
     });
    })
  },

  /**
   * AdminSignin - allows access to authenticated admin
   * @param {object} req - incoming admin object
   * @param {object} res - server response object
   * @return {json} - returns json format response
   */
  adminSignin(req, res) {
    Admins.findOne({
    where: {
      email: req.body.email,
      token: req.body.token
    }
    }).then((admin) => {
    if(admin) {
      const isValidPassword = bcrypt.compareSync(req.body.password, admin.password);
      if (isValidPassword) {
        const token = jwt.sign({ id: admin.id, email: admin.email, role: admin.role},
          process.env.JWT_SECRET, { expiresIn: '24h' });
        res.status(200).send({
          token,
          message: 'Admin login successful!'
        });
      } else {
        res.status(400).send({
          message: 'username / password did not match'
        });
      }
    } else {
      return res.status(400).send({
        message: 'username / password did not match'
      })
    }
    }).catch((error) => {
    res.status(500).json({
      error,
      message: 'An error has occurred trying to search for user',
    });
    });
  }
}