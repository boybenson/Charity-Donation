import express from "express";
import {
  INITIALIZE_A_TRANSACTION,
  VERIFY_A_TRANSACTION,
} from "../controllers/paystackControllers.js";
const paystackRouters = express.Router();

// Route To Initialize Transaction
paystackRouters.post("/initialize-transaction", INITIALIZE_A_TRANSACTION);

// Route To Verify A Transaction
paystackRouters.get("/verify-transaction", VERIFY_A_TRANSACTION);

export default paystackRouters;
