// Copyright 2022,
// Jurrit van der Ploeg

import express, { Request, Response } from 'express';

import Category from './category.model';

const router = express.Router();

/**
 * @route GET /api/category
 * @desc Get selected category
 * @access PUBLIC
 */
router.get('/', (req: Request, res: Response): Promise<Response> => {
  return Category.find()
    .then(cat => {
      return res.status(200).json({
        category: cat[0].category
      });
    })
    .catch(error => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
});

/**
 * @route PUT /api/category
 * @desc Update category by known id
 * @access PUBLIC
 */
router.put('/', (req: Request, res: Response): Promise<Response> | Response => {
  if (!req.body.category) {
    return res.status(400).json({
      message: 'Request should contain category key.'
    });
  }
  if (!req.body.category.length) {
    return res.status(400).json({
      message: 'Category string can not be empty.'
    });
  }
  return Category.findByIdAndUpdate('61cc1b4634232b35871212a1', req.body, { new: true })
    .then(() => {
      return res.status(200).json({
        message: `Category was set succesfully to ${req.body.category}.`
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