import express from 'express';

const userRoutes = express.Router();

userRoutes.get('/signin', (req, res) => {
  res.send({
    message: "You have successfully signed up!"
  })
})

export default userRoutes;