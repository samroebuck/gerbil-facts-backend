import * as dotenv from "dotenv";
import express from "express";

import { connect } from "./database/database";

import { factsRouter } from './routes/facts.routes'
import { randomRouter } from './routes/random.routes'

dotenv.config();

connect();

/**
 * App Variables
 */
if (!process.env.PORT) {
   process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */
app.use(express.json());

app.use('/', factsRouter);

app.use('/random', randomRouter)
/**
 * Server Activation
 */

app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
});