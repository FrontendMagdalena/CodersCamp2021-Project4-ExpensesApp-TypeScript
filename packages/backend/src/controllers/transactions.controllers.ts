import * as express from 'express';
import mongoose from 'mongoose';
import { Transactions } from '../models/Transactions';
const sendErrorResponse = require('../utils/helpers').sendErrorResponse;

interface IUserRequest extends express.Request {
  user: {
    id: string;
  };
}

const getTransactions = async (req: IUserRequest, res: express.Response) => {
  const userId = req.user.id;

  try {
    const transactions = await Transactions.find({ userID: userId });
    res.json(transactions);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const getTransaction = async (req: IUserRequest, res: express.Response) => {
  try {
    const transactions = await Transactions.findById(req.params.id);

    res.json(transactions);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const addTransactions = async (req: IUserRequest, res: express.Response) => {
  try {
    // add new before Transactions(req.body) because of TS errors
    const transaction = await new Transactions(req.body);
    transaction.save();
    res.json(transaction);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateTransaction = async (req: IUserRequest, res: express.Response) => {
  try {
    const transaction = await Transactions.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.json(transaction);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteTransaction = async (req: IUserRequest, res: express.Response) => {
  try {
    const transaction = await Transactions.findByIdAndRemove(req.params.id);
    res.json(transaction);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  getTransactions,
  getTransaction,
  addTransactions,
  updateTransaction,
  deleteTransaction,
};
