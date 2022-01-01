// Copyright 2022,
// Jurrit van der Ploeg

import request from 'supertest';

import createServer from '../server';

const app = createServer();

describe('Categories', () => {
  it('should respond with 200', (done) => {
    const res = request(app).get('/api/categories');
    res.expect(200, done);
  });
});