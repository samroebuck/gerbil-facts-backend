import { Fact } from "../models/fact.model";

export const getAllFacts = async (req, res, next): Promise<void> => {
    try {
        const all = await Fact.find();
        console.log(all);
        res.status(200).send(all);
    } catch (error) {
        next(error);
    }
}

