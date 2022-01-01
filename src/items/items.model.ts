// Copyright 2022,
// Jurrit van der Ploeg

import { Schema } from 'mongoose';

const itemSchema = new Schema(
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

export default itemSchema;