import { Router } from "express";
import { signup, login } from '../controllers/userController.js';
import { signupSchema, loginSchema } from "../validations/userValidation.js";

const userRouter = Router();


userRouter.post('/signup', (req, res, next) => {
  const { error } = signupSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next(); 
}, signup);

userRouter.post('/login', (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
}, login);

export default userRouter;
