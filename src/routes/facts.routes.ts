import express from "express";
import { getAllFacts, getARandomFact, getFactById, addNewFact } from '../controllers/facts.controller';

export const factsRouter = express.Router();

factsRouter.route('/')
    .get(getAllFacts);

factsRouter.route('/random')
    .get(getARandomFact)

factsRouter.route('/fact/:factId')
    .get(getFactById);

factsRouter.route('/fact/add')
    .post(addNewFact);