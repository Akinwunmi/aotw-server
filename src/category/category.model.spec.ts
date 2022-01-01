// Copyright 2022,
// Jurrit van der Ploeg

import { expect } from 'chai';

import Category from './category.model';
 
describe('CategoryModel', function() {
  it('should be invalid if category is empty', done => {
    const category = new Category();

    category.validate(error => {
      expect(error?.message).to.exist;
      done();
    });
  });
});