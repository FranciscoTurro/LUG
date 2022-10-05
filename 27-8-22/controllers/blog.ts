import { ResolveOptions } from "dns";
import { Request, Response } from "express";
import { Model } from "mongoose";
import BlogModel from "../models/blogs";
export const blogController = {
  post: async (req: Request, res: Response) => {
    try {
      const newBlog = new BlogModel({ ...req.body });
      await newBlog.save();
      res.status(200).send(`Added object: ${newBlog}`);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const filter = { title: req.params.title };
      const blogList = await BlogModel.findOneAndDelete(filter);
      res.status(200).send(`Deleted object: ${blogList}`);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  get: async (req: Request, res: Response) => {
    try {
      const blogList = await BlogModel.find();
      res.status(200).send(`All objects: ${blogList}`);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  put: async (req: Request, res: Response) => {
    try {
      const filter = { title: req.params.title };
      const blogList = await BlogModel.findOneAndUpdate(filter, {
        ...req.body,
      });
      res.status(200).send(`Modified object: ${blogList}`);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  addComment: async (req: Request, res: Response) => {
    try {
      const filter = { _id: req.params.id };
      const blog = await BlogModel.find(filter);
      if (!blog.length) res.status(404).send(" no se encontro el blog");
      else {
        blog[0].comments.push({ ...req.body });
        res.status(200).send(`Modified object: ${blog}`);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
