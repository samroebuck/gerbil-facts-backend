import express from "express";

import { getARandomFact } from '../controllers/random.controller';

export const randomRouter = express.Router();

randomRouter.route('/')
    .get(getARandomFact);