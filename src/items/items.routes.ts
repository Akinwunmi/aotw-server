// Copyright 2022,
// Jurrit van der Ploeg

import express, { Request, Response } from 'express';
import { model } from 'mongoose';

import { Category } from '../category';

import itemSchema from './items.model';
import { ItemAttributes, ItemDocument, ItemModel } from './items.interface';

const router = express.Router();

/**
 * @route GET /api/items
 * @desc Get all items
 * @access PUBLIC
 */
router.get('/', (req: Request, res: Response): Promise<Response> => {
  // ! FIX using category value
  let category = '';
  Category.find().then(cat => {
    category = cat[0].category;
  });

  const Item = model<ItemDocument, ItemModel>('item', itemSchema, category || 'regions'); // ! FIX hardcoded value
  itemSchema.statics.build = (attr: ItemAttributes): ItemDocument => {
    return new Item(attr);
  };

  return Item.find()
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

export default router;