// Copyright 2022,
// Jurrit van der Ploeg

import 'dotenv/config';

import createServer from './server';

const NAMESPACE = 'App server';

const startServer = (): void => {
  const NODE_ENV: string = process.env.NODE_ENV as string;
  const PORT: number = parseInt(process.env.PORT as string, 10) || 8080;

  const app = createServer();

  app.listen(PORT, () => {
    console.log(`${NAMESPACE} is running in ${NODE_ENV} mode on port ${PORT}.`);
  });
};

startServer();