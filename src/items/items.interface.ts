// Copyright 2022,
// Jurrit van der Ploeg

import { Document, Model } from 'mongoose';

export interface ItemAttributes {
  id: string;
  code: string;
  items: ItemAttributes[];
  itemType: string;
  name: string;
  nameLocal: string;
  visual: boolean;
}

export interface ItemDocument extends Document {
  id: string;
  code: string;
  itemType: string;
  items: ItemAttributes[];
  name: string;
  visual: boolean;
}

export interface ItemModel extends Model<ItemDocument> {
  build(attr: ItemAttributes): ItemDocument;
}