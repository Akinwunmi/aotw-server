// Copyright 2022,
// Jurrit van der Ploeg

import request from 'supertest';

import createServer from './server';

const app = createServer();

describe('Server', () => {
  describe('When server is created', () => {
    it('it should show welcome message', (done) => {
      const res = request(app).get('/');
      res.expect(200, 'Welcome to the server of Archive of the World.', done);
    });
  });
});