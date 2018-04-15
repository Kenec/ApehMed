import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Users } from '../models';

require('dotenv').config();

export default {
  /**
   * Signup - creates a new user account
   * @param {object} req - incoming user object
   * @param {object} res - server response object
   * @return {json} - returns json format response
   */
  Signup(req, res) {
   const saltRounds = 10;
   const hash = bcrypt.hashSync(req.body.password, saltRounds);
   Users.create({
      title: req.body.title,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      gender: req.body.gender,
      dob: req.body.dob,
      email: req.body.email,
      phone: req.body.phone,
      password: hash
   }).then((user) => {
      const token = jwt.sign({
        id: user.id,
        firstname: user.firstname,
        email: user.email
      }, process.env.JWT_SECRET, { expiresIn: '48h' });
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
   * Signin - allows access to authenticated user
   * @param {object} req - incoming user object
   * @param {object} res - server response object
   * @return {json} - returns json format response
   */
  Signin(req, res) {

   Users.findOne({
    where: {
      email: req.body.email
    }
   }).then((user) => {
    if(user) {
      const isValidPassword = bcrypt.compareSync(req.body.password, user.password);
      if (isValidPassword) {
        const token = jwt.sign({ id: user.id, firstname: user.firstname, lastname: user.lastname, 
        email: user.email }, process.env.JWT_SECRET, { expiresIn: '48h' });
        res.status(200).send({
          token,
          message: 'Successfully logged in!'
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