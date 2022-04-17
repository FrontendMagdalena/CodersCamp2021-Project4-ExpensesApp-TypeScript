export {};
import { Schema, Types } from 'mongoose';
import mongoose from 'mongoose';

interface IUser {
  email: {
    type: string;
    required: boolean;
  };
  password: {
    type: string;
    required: boolean;
  };
  categoriesID: {
    type: Types.ObjectId;
  };
  isActive: {
    type: boolean;
    required: boolean;
  };
  createdAt: {
    type: Date;
    required: boolean;
  };
  modificatedAt: {
    type: Date;
  };
}

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  categoriesID: {
    type: [mongoose.SchemaTypes.ObjectId],
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  modificatedAt: {
    type: Date,
  },
});

// module.exports = mongoose.model('Users', UserSchema);

export const Users = mongoose.model('Users', UserSchema);
