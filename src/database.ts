import mongoose from 'mongoose'
import config from './config';
(async () => {
    try {
        const db = await mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.dcdbzgh.mongodb.net/proyecto-base`);
        console.log("database is connected:", db.connection.name)
    } catch (error) {
        console.error(error);
    }
})()