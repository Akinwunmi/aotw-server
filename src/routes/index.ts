// Copyright 2022,
// Jurrit van der Ploeg

import express, { Router } from 'express';

import category from '../category';
import items from '../items';

const router = Router();

// ! FIX change folder based on selected category
router.use('/api/visuals', express.static('src/assets/images/regions'));
router.use('/api/category', category);
router.use('/api/items', items);

export default router;