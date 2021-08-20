import { Request, Response, NextFunction } from 'express';
import { Fact } from "../models/fact.model";
import { IFact } from '../interfaces/fact.interface'

const getAllFacts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const all: IFact[] = await Fact.find();
        res.status(200).send(all);
    } catch (error) {
        next(error);
    }
}


const getARandomFact = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const random: IFact[] = await Fact.aggregate([{ $sample: { size: 1 } }]);
        res.status(200).send(random);
    } catch (error) {
        next(error);
    }
}

const getFactById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const factById: IFact = await Fact.findById(req.params.factId).exec();
        res.status(200).send(factById);
    } catch (error) {
        next(error);
    }
}

const addNewFact = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

        const newFact = new Fact({
            fact: String(req.body.fact.fact),
            author: String(req.body.fact.name)
        });
        newFact.save(function (err, fact) {
            if (err) return console.error(err);
            console.log(fact.fact + " saved to facts collection.");
            res.status(200).send(`${fact.fact} saved to facts collection.`);

        });
    } catch (error) {
        next(error);
    }
}

export { getAllFacts, getARandomFact, getFactById, addNewFact };