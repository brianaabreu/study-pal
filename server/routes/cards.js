
import express from 'express';
import { getCard } from '../controllers/cards.js';
import { createCard } from '../controllers/cards.js';

const router = express.Router();

router.get('/', getCard);
router.post('/', createCard);

export default router;

