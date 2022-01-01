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
    .then(category => {
      return res.status(200).json({
        category
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