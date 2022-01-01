// Copyright 2022,
// Jurrit van der Ploeg

import { Document, Model } from 'mongoose';

export interface ItemAttributes {
  code: string;
  items: ItemAttributes[];
  itemType: string;
  name: string;
  nameLocal: string;
  visual: boolean;
}

export interface ItemDocument extends ItemAttributes, Document {}

export interface ItemModel extends Model<ItemDocument> {
  build(attr: ItemAttributes): ItemDocument;
}