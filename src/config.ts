import dotenv from 'dotenv'
dotenv.config();

export default {
    MONGO_DATABASE: 'videosdb',
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_HOST: 'localhost',
    PORT: process.env.PORT || 3000

}