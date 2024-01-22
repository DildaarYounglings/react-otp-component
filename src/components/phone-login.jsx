import { useState } from "react";
import OtpInput from "./otp-input";

const PhoneOtpForm = () => {
  const [phoneNum, setPhoneNum] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const handleSubmit = (e) => {
    // preventing browser reload
    e.preventDefault();
    // phone number validation
    const regex = /[^0-9]/g;
    if (phoneNum.length < 10 || regex.test(phoneNum)) {
      alert("Please enter a valid phone number");
    }
    // Call an api;
    // show Otp input
    setShowOtpInput(true);
  };
  const handleChange = (e) => {
    setPhoneNum(e.target.value);
  };
  const onOtpSubmit = (otp) => {
    console.log("logging succesfull", otp);
  };
  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
            value={phoneNum}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNum}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};
export default PhoneOtpForm;
