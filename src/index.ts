import express, { Response} from "express";
import dotenv from 'dotenv';
import dbConnection from './knex';
import {Knex} from 'knex';
import { Model } from 'objection';


dotenv.config();

const knex:Knex = dbConnection;

Model.knex(knex);

const app = express();

app.get('/health', async (_, res:Response) => {
    res.status(200).json({status: "healthy"})
});

app.listen({ port: process.env.PORT }, async () => {
  console.info(`Server listening at http://localhost:${process.env.PORT}`);
});