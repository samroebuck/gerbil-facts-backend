import express from "express";

import { getAllFacts } from '../controllers/facts.controller';

export const factsRouter = express.Router();

factsRouter.route('/')
    .get(getAllFacts);