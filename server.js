import dotenv from "dotenv";
dotenv.config();
import express from "express";
import paystackRouters from "./routes/paystackRouters.js";
import path from "path";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/payment", paystackRouters);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname + "/frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () => console.log(`App is running on port ${port}`));
