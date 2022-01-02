// Copyright 2022,
// Jurrit van der Ploeg

import { Document, Model } from 'mongoose';

export interface CategoryAttributes {
  category: string;
  categories: string[];
}

export interface CategoryDocument extends CategoryAttributes, Document {}

export interface CategoryModel extends Model<CategoryDocument> {
  build(attr: CategoryAttributes): CategoryDocument;
}