// Copyright 2022,
// Jurrit van der Ploeg

import express, { Request, Response } from 'express';
import { connection } from 'mongoose';

import { Category } from '../category';

// ! FIX usage of model
import Item from './items.model';

const router = express.Router();

/**
 * @route GET /api/items
 * @desc Get all items for found category
 * @access PUBLIC
 */
router.get('/', (req: Request, res: Response): Promise<void | Response> => {
  return Category.find().then(cat => {
    connection.db.collection(cat[0].category, (err, collection) => {
      collection.find().toArray()
        .then(items => {
          return res.status(200).json({
            items
          });
        })
        .catch(error => {
          return res.status(500).json({
            message: error.message,
            error
          });
        });
    });
  });
});

export default router;