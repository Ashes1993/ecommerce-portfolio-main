import React from "react";
import "./SuccessMessage.css";
import { ImCheckboxChecked } from "react-icons/im";

const SuccessMessage = ({ message, setIsSuccessMessage }) => {
  return (
    <div className="success-message">
      <ImCheckboxChecked className="success-icon" />
      <h1>{message}</h1>
      <button onClick={() => setIsSuccessMessage(false)}>Okay</button>
    </div>
  );
};

export default SuccessMessage;
