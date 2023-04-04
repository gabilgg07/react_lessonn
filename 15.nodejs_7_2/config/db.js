import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@development.brvczma.mongodb.net/?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log("mongodb is connecting".cyan.bold);
  } catch (e) {
    console.error(`Error is occurred - ${e}`);
    process.exit(1);
  }
};

export default connectDB;
