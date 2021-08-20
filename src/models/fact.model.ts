import { model, Schema } from 'mongoose';
import { IFact } from '../interfaces/fact.interface'

const FactSchema: Schema = new Schema({
    fact: { type: String, required: true },
    author: { type: String, required: true },
    dateAdded: { type: Date, default: Date.now() }
});


export const Fact = model<IFact>('fact', FactSchema);