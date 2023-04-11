import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import accountRoutes from "./routes/accountRoutes.js";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/accounts", accountRoutes);

app.get("/", (req, res) => {
  res.send("app is running");
});

// console.log("Salam".red.bold);
// console.log(process.env.PORT, "port".america.underline);

const PORT =
  process.env.MODE === "development"
    ? process.env.PORT_DEV
    : process.env.PORT_PROD;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
