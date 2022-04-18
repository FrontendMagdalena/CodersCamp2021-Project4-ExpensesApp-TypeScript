import { Schema, Types } from 'mongoose';
import mongoose from 'mongoose';

export interface ICategories{
  userID: {
    type: Types.ObjectId;
    ref: string;
    required: boolean;
  };
  name: {
    type: string;
    required: boolean;
  };
  limit: {
    type: number;
  };
  color: {
    type: string;
  };
}

const CategoriesSchema = new Schema<ICategories>({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  limit: {
    type: Number,
  },
  color: {
    type: String,
  }
});

export const Categories = mongoose.model('Categories', CategoriesSchema);
