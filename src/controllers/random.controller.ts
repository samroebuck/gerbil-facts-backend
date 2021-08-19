import { Fact } from "../models/fact.model";

export const getARandomFact = async (req, res, next): Promise<void> => {
    try {
        const random = await Fact.aggregate([{ $sample: { size: 1 } }]);
        console.log(random);
        res.status(200).send(random);
    } catch (error) {
        next(error);
    }
}

