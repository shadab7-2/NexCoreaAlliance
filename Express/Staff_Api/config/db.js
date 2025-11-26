const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
        console.log('MongoDB connected to the server');

    }catch(error){
        console.log("MongoDB connection is failed : ", error.message)
    }
}

module.exports = connectDB;
