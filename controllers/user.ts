import { Request, Response } from 'express';
import { Model } from 'mongoose';
import UserModel from '../models/users';
export const userController = {
  get: async (req: Request, res: Response) => {
    try {
      const userList = await UserModel.find();
      res.status(200).send(`All objects: ${userList}`);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  post: async (req: Request, res: Response) => {
    try {
      const newUser = new UserModel({ ...req.body });
      await newUser.save();
      res.status(200).send(`Added object: ${newUser}`);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
