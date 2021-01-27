import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/WriteUp.css";

const WriteUp = () => {
  return (
    <div className="main__container">
      <div className="writeup__container">
        <h1>Be The Change You Want In The World</h1>
        <p>
          Anike Foundation welcomes individuals or organizations who want to
          join our effort to develop education in Africa.
        </p>{" "}
        <br />
        <p>
          We need volunteers for various assignments. For a complete list of our
          open volunteer positions, please visit our{" "}
          <a href="/">opportunities page.</a>{" "}
        </p>{" "}
        <br />
        <p>
          Alternatively, please email us at{" "}
          <a href="/">contact@anikefoundation.org</a> with a resume attached and
          a brief description of your skills and interests, and we will get back
          to you shortly with a potential position that might be a good fit.
        </p>{" "}
        <br />
        <p>
          Please note: Volunteer programs in Africa are not available through
          Anike Foundation itself. However, our Ambassador in Africa program
          offers the opportunity for volunteering with one of our partnering
          organizations in Africa.{" "}
        </p>
        <div className="writeup__donate__button">
          <NavLink to="/donate-to-make-a-change">Make A Donation</NavLink>
        </div>
      </div>
    </div>
  );
};

export default WriteUp;
