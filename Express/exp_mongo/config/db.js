import mongoose from 'mongoose';
// const mongoose = require('mongoose');
import dotenv from 'dotenv'
 dotenv.config();
// require('../.env')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};
// connectDB();
export default connectDB;



