import validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import jwt from 'jsonwebtoken';
import { Users, Admins } from '../../models';

export function signupValidation(req, res, next) {
  const errors = {};

  if ((!req.body.title) || (req.body.title.trim() == "")) {
    errors.title = "title field is required";
  }
  if ((!req.body.firstname) || (req.body.firstname.trim() == "")) {
    errors.firstname = "firstname field is required";
  }
  if ((!req.body.lastname) || (req.body.lastname.trim() == "")) {
    errors.lastname = "lastname field is required";
  }
  if ((!req.body.gender) || (req.body.gender.trim() == "")) {
    errors.gender = "gender field is required";
  }
  if ((!req.body.dob) || (req.body.dob.trim() == "")) {
    errors.dob = "date of birth field is required";
  }
  if ((!req.body.email) || (req.body.email.trim() == "")) {
    errors.email = "email field is required";
  }
  if ((!req.body.phone) || (req.body.phone.trim() == "")) {
    errors.phone = "email field is required";
  }
  if ((!req.body.password) || (req.body.password.trim() == "")) {
    errors.password = "password field is required";
  } else if ((!req.body.repassword) || (req.body.repassword.trim() == "")) {
    errors.repassword = "confirm password field is required";
  } else if (req.body.password !== req.body.repassword) {
    errors.password = "password did not match";
  }

  if (!isEmpty(errors)) {
   return res.status(400).send({
     error: errors
   })
  }

  next();
}

export function signinValidation(req, res, next) {
  const errors = {};
  
  if ((!req.body.email) || (req.body.email.trim() == "")) {
    errors.email = "email field is required";
  }
  if ((!req.body.password) || (req.body.password.trim() == "")) {
    errors.password = "password field is required";
  }
  
  if (!isEmpty(errors)) {
    return res.status(400).send({
      error: errors
    })
   }
 
   next();
}

export function adminSignupValidation(req, res, next) {
  const errors = {};
  
  if ((!req.body.email) || (req.body.email.trim() == "")) {
    errors.email = "email field is required";
  }
  if ((!req.body.token) || (req.body.token.trim() == "")) {
    errors.token = "token field is required";
  }
  if ((!req.body.password) || (req.body.password.trim() == "")) {
    errors.password = "password field is required";
  }
  
  if (!isEmpty(errors)) {
    return res.status(400).send({
      error: errors
    })
   }
 
   next();
}

export function isAccountExits(req, res, next) {
  const error = {};

  Users.findOne({
    where: {
      $or: [
        { email: req.body.email },
        { phone: req.body.phone }
      ] 
    }
  }).then(foundUser => {
    if (foundUser !== null) {
      return res.status(409).send({
        message: 'User already exist'
      });
    }
    next();
  }).catch((error) => {
    res.status(500).json({
      message: 'An error has occurred trying to search for user',
    });
  });
}

export function isAdminExits(req, res, next) {
  Admins.findOne({
    where: {
      email: req.body.email
    }
  }).then(foundAdmin => {
    if (foundAdmin !== null) {
      return res.status(409).send({
        message: 'Admin already exist'
      });
    }
    next();
  }).catch((error) => {
    res.status(500).json({
      message: 'An error has occurred trying to search for user',
    });
  });
}

export function isAdmin(req, res, next) {
  Admins.findOne({
    where: {
      email: req.body.email 
    }
  }).then(admin => {
    if (admin === null) {
      return res.status(404).send({
        message: 'Account does not exist!'
      });
    }
    next();
  }).catch((error) => {
    res.status(500).json({
      message: 'An error has occurred trying to search for user====',
    });
  });
}

export function isValidToken(req, res, next) {
  const testToken = '12345';
  if (testToken !== '12345') {
    res.status(400).send({
      message: 'Invalid token for this route'
    })
  }
  next();
}

export function isAdminToken(req, res, next) {
  const token = req.body.token || req.query.token ||
  req.headers.Authorization || req.headers['x-access-token'];
  if (!token) {
    return res.status(400).send({
      message: 'Invalid token for this route'
    });
  } else {
    const decoded = jwt.decode(token, {complete: true});
    if (decoded.payload.role !== 1) {
      return res.status(401).send({
        message: 'Sorry! You are not authourized to access this endpoint'
      });
    }
    next();
 }
}


