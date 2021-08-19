import mongoose, { ConnectionOptions } from 'mongoose';

export const connect = async (): Promise<void> => {
    const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@gerbil-facts.kbfpu.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

    const options: ConnectionOptions = { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true };

    try {
        await mongoose.connect(uri, options);
        console.log('connected to db');

    } catch (error) {
        console.log(error);

    }



}
