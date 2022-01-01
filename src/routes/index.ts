// Copyright 2022,
// Jurrit van der Ploeg

import { Router } from 'express';

import category from '../category';
import items from '../items';

const router = Router();

router.use('/api/category', category);
router.use('/api/items', items);

export default router;