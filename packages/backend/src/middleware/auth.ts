const jwt = require('jsonwebtoken');
import * as express from 'express';

interface IUserRequest extends express.Request {
  user: string;
}

exports.authToken = (
  req: IUserRequest,
  res: express.Response,
  next: express.NextFunction,
) => {
  const token = req.header('authorization-token');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const secret = process.env.JWT_SECRET;

    const decoded = jwt.verify(token, secret);
    req.user = decoded;

    next();
  } catch (err) {
    res.status(400).send({ message: 'Invalid token.' });
  }
};
