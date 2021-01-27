import dotenv from "dotenv";
dotenv.config();
import express from "express";
import paystackRouters from "./routes/paystackRouters.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/payment", paystackRouters);

app.listen(port, () => console.log(`App is running on port ${port}`));
