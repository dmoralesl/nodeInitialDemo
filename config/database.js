import mongoose from "mongoose";

// connect to db

export default await mongoose.connect('mongodb://localhost:27017/dice_game');