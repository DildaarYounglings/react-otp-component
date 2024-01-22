import { useEffect, useRef, useState } from "react";

const OtpInput = ({ length, onOtpSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    // alow only 1 input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    // submit trigger
    const combinedOtp = newOtp.join("");
    onOtpSubmit(combinedOtp);
  };
  const handleClick = (e) => {};
  const handleOnKeyDown = (index, e) => {};
  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            ref={(input) => (inputRefs.current[index] = input)}
            type="text"
            value={value}
            key={index}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleOnKeyDown(index, e)}
            className="otpInput"
          />
        );
      })}
    </div>
  );
};
export default OtpInput;