import express from "express";
import colors from "colors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());

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
