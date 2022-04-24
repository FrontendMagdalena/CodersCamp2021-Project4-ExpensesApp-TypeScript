import { Schema, Types } from 'mongoose';
import mongoose from 'mongoose';

export interface ITransaction {
  userID: {
    type: Types.ObjectId;
    required: boolean;
  };
  category: {
    type: string;
    required: boolean;
  };
  title: {
    type: string;
    required: boolean;
  };
  type: {
    type: string;
    required: boolean;
  };
  amount: {
    type: number;
    required: boolean;
  };
  date: {
    type: Date;
    required: boolean;
  };
}

const TransactionsSchema = new Schema<ITransaction>({
  userID: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export const Transactions = mongoose.model('Transactions', TransactionsSchema);
