import * as express from 'express';
import { ITransaction, Transactions } from '../models/Transactions';
const sendErrorResponse = require('../utils/helpers').sendErrorResponse;

interface IUserRequest extends express.Request {
  user: {
    id: string;
  };
}

const getBalance = async (req: IUserRequest, res: express.Response) => {
  const userId = req.user.id;

  try {
    const transactions = await Transactions.find({ userID: userId });

    const expenses = transactions
      .filter((item) => (item.type as unknown as string) === 'Wydatek')
      .reduce((acc, item) => (acc += +item.amount), 0);

    const incomes = transactions
      .filter((item) => (item.type as unknown as string) === 'Przychód')
      .reduce((acc, item) => (acc += +item.amount), 0);

    const total = incomes - expenses;

    res.json({
      total: total,
      incomes: incomes,
      expenses: expenses,
    });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  getBalance,
};
