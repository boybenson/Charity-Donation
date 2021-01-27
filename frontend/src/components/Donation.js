import React, { useState } from "react";
import PaymentIcon from "@material-ui/icons/Payment";
import LoopIcon from "@material-ui/icons/Loop";
import axios from "axios";
import "../styles/Donation.css";

const Donation = () => {
  // States to handle form fileds
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [amount, setAmount] = useState(null);

  // states to check api req status
  const [isLoading, setIsloading] = useState(false);

  // Error
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission
  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    const data = { email, fullName, amount };
    setIsloading(true);
    setIsError(false);
    if (email === "" || fullName === "" || amount === null) {
      setIsloading(false);
      setError("Please Fill All Fields");
      setIsError(true);
    } else {
      const apiReq = await axios.post(
        "/api/payment/initialize-transaction",
        data
      );
      if (apiReq) {
        window.location = apiReq.data.data.authorization_url;
        setIsloading(false);
      }
    }
  };

  return (
    <div className="main__container">
      <form onSubmit={HandleFormSubmit}>
        {isError && <h1 className="warning">{error}</h1>}
        <div className="form__group">
          <label htmlFor="email">Email :</label> <br />
          <input
            type="email"
            id="email"
            placeholder="example@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label htmlFor="fullName">FullName :</label> <br />
          <input
            type="text"
            id="fullName"
            placeholder="Cathrine James"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label htmlFor="amount">Amount GH₵: </label> <br />
          <input
            type="Number"
            id="amount"
            placeholder="100"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form__group">
          {isLoading ? (
            <button>
              <LoopIcon /> Processing......
            </button>
          ) : (
            <button type="submit">
              <PaymentIcon />
              Continue
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Donation;
