import * as express from 'express';
const router = express.Router();
const {
  getTransactions,
  getTransaction,
  addTransactions,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactions.controllers');

router.get('/', getTransactions);
router.get('/:id', getTransaction);
router.post('/', addTransactions);
router.patch('/:id', updateTransaction);
router.delete('/:id', deleteTransaction);

module.exports = router;
