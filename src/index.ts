import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5002;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ message: "welcome" });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
