// Set up the routes for user registration and login requests.
// When a client sends a POST request to '/register' or '/login',
// it calls the 'register' or 'login' methods in the user controller respectively.

const { Router } = require('express');

const userController = require('../controllers/user.js');

const userRouter = Router();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);

module.exports = userRouter;
