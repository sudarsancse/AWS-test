import express from "express";
import dotenv from "dotenv";
import user from "./routes/routes.js";
dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use("/", user);

app.get("/", (req, res) => {
  res.send("Auth server working...");
});

app.listen(PORT, () => {
  console.log(`Server Auth started on port number ${PORT}`);
});
