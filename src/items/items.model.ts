// Copyright 2022,
// Jurrit van der Ploeg

import { model, Model, Schema } from 'mongoose';

import { ItemAttributes, ItemDocument, ItemModel } from './items.interface';

const itemSchema = new Schema<ItemAttributes, Model<ItemAttributes>>(
  {
    id: { type: String },
    code: { type: String, required: true },
    items: { type: Object, required: true },
    itemType: { type: String, required: true },
    name: { type: String, required: true },
    nameLocal: { type: String, required: true },
    visual: { type: Boolean, required: true }
  },
  {
    timestamps: true
  }
);

itemSchema.method('toJSON', function() {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export default model<ItemDocument, ItemModel>('item', itemSchema);