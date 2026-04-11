import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use("/", (req, res) => {
  res.send("Api server working.");
});

app.listen(PORT, () => {
  console.log(`Server Api started on port number ${PORT}`);
});
