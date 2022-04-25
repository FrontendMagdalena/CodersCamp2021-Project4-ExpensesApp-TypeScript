import * as express from 'express';

const sendErrorResponse = (
  req: express.Request,
  res: express.Response,
  error: unknown,
) => {
  return res.status(400).json({ message: error });
};

module.exports = {
  sendErrorResponse,
};
