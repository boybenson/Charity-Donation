import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// Headers To use for both endpoints
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
};

// Initialize a transaction controller
export const INITIALIZE_A_TRANSACTION = async (req, res) => {
  const { email, fullName, amount } = req.body;

  //   Data to be sent to the paystack verification endpoint
  const data = {
    email,
    fullName,
    amount: amount * 100,
    callback_url: "http://localhost:8080/api/payment/verify-transaction",
    metadata: {
      email,
      fullName,
    },
  };

  const apiReq = await axios.post(
    "https://api.paystack.co/transaction/initialize",
    data,
    {
      headers,
    }
  );
  res.json(apiReq.data);
};

// Verify The Transaction Controller
export const VERIFY_A_TRANSACTION = async (req, res) => {
  const referenceID = req.query.reference;
  const apiReq = await axios.get(
    `https://api.paystack.co/transaction/verify/${referenceID}`,
    {
      headers,
    }
  );
};
