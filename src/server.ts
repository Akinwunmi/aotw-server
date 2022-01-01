// Copyright 2022,
// Jurrit van der Ploeg

import express, { Application, Request, Response, Router } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import config from './config/config';
import logger from './middleware/logger';
import routes from './routes';

const NAMESPACE = 'Server';

export default function createServer(): Application {
  const app: Application = express();
  
  // verbinden met mongoose database
  mongoose.set('useFindAndModify', false);
  mongoose.connect(config.db.url, config.db.options)
    .then(() => {
      console.log(NAMESPACE + ' is connected to the database.');
    })
    .catch(error => {
      console.log(NAMESPACE, error.message, error);
      process.exit(1);
    });

  initializeMiddlewares(app);
  initializeRoutes(app, routes);
  
  // default route
  app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the server of Archive of the World.');
  });

  return app;
}

function initializeMiddlewares(app: Application): void {
  // logger middleware
  app.use(logger);

  // cors
  const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions));
  
  // parse requests van content-type
  // - application/json
  // - application/x-www-form-urlencoded
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
}

// creëer API voor routes
function initializeRoutes(app: Application, routes: Router): void {
  app.use(routes);
}