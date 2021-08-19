import { model, Schema } from 'mongoose';

interface Fact {
    fact: string;
    author: string;
    dateAdded: Date;
}

const FactSchema: Schema = new Schema({
    fact: { type: String, required: true },
    author: { type: String, required: true },
    dateAdded: { type: Date, required: true }
});


export const Fact = model<Fact>('fact', FactSchema);