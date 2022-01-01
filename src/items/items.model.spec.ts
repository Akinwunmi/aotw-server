// Copyright 2022,
// Jurrit van der Ploeg

import { expect } from 'chai';

import Item from './items.model';
 
describe('ItemModel', function() {
  it('should be invalid if item is empty', (done) => {
    // ! FIX when linked to Category
    const item = new Item();

    item.validate(error => {
      expect(error?.message).to.exist;
      done();
    });
  });
});