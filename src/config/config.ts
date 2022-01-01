// Copyright 2022,
// Jurrit van der Ploeg

import dotenv from 'dotenv';

// dotenv
dotenv.config();

// database informatie
const DB_NAME = process.env.DB_NAME;
const DB_CLUSTER = process.env.DB_CLUSTER;
const DB_HOST = DB_CLUSTER + '.l31rd.mongodb.net' + DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const DB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  keepAlive: true
};

const DB = {
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  url: 'mongodb+srv://' + DB_USERNAME + ':' + DB_PASSWORD + DB_HOST,
  options: DB_OPTIONS
};

// server informatie
const SERVER_HOST = process.env.HOST;
const SERVER_PORT = process.env.PORT;
const SERVER_TOKEN_EXPIRED = process.env.TOKEN_EXPIRED;
const SERVER_TOKEN_ISSUER = process.env.TOKEN_ISSUER;
const SERVER_SECRET = process.env.SECRET;
const PUBLIC_DIR = process.env.PUBLIC_DIR;

const SERVER = {
  host: SERVER_HOST,
  port: SERVER_PORT,
  token: {
    expiredAt: SERVER_TOKEN_EXPIRED,
    issuer: SERVER_TOKEN_ISSUER,
    secret: SERVER_SECRET
  },
  publicDirectory: PUBLIC_DIR
};

const config = {
  db: DB,
  server: SERVER
};

export default config;