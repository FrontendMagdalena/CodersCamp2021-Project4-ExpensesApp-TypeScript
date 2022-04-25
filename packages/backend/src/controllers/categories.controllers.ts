import * as express from 'express';
import { Categories } from '../models/Categories';
const sendErrorResponse = require('../utils/helpers').sendErrorResponse;

interface IUserRequest extends express.Request {
  user: {
    id: string;
  };
}

const getCategories = async (req: IUserRequest, res: express.Response) => {
  const userId = req.user.id;

  const categories = await Categories.find({ userID: userId });
  if (!categories) {
    res.status(404).send('Not found');
  }
  res.send(categories);
};

const getCategory = async (req: IUserRequest, res: express.Response) => {
  const category = await Categories.findById(req.params.id);
  if (!category) {
    res.status(404).send('Not found');
  }
  res.send(category);
};

const addCategory = async (req: IUserRequest, res: express.Response) => {
  try {
    const newCategory = new Categories({ ...req.body, user: req.user.id });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const removeCategory = async (req: IUserRequest, res: express.Response) => {
  try {
    const removedCategory = await Categories.findByIdAndRemove(req.params.id);
    if (!removedCategory) {
      return res.status(400).end();
    }
    return res.status(200).json({ message: 'category deleted' });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateCategory = async (req: IUserRequest, res: express.Response) => {
  try {
    const updatedCategory = await Categories.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(200).json(updatedCategory);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  getCategories,
  getCategory,
  addCategory,
  removeCategory,
  updateCategory,
};
