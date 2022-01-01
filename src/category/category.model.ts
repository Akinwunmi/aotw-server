// Copyright 2022,
// Jurrit van der Ploeg

import { model, Model, Schema } from 'mongoose';

import { CategoryAttributes, CategoryDocument, CategoryModel } from './category.interface';

const categorySchema = new Schema<CategoryAttributes, Model<CategoryAttributes>>(
  {
    category: { type: String, required: true }
  },
  {
    collection: 'category',
    timestamps: true
  }
);

categorySchema.method('toJSON', function() {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export default model<CategoryDocument, CategoryModel>('category', categorySchema);