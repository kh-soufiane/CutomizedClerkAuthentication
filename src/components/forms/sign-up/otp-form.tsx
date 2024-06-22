"use client";
import React, { SetStateAction } from "react";
import OTPInput from "./otp-input";

type Props = {
  setOnOTP: React.Dispatch<SetStateAction<string>>;
  onOTP: string;
};

const OTPForm = ({ setOnOTP, onOTP }: Props) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Enter OTP</h2>
      <p className="text-iridium md:text-sm">
        Enter the one time password that was sent to your email
      </p>
      <div className="w-full justify-center flex py-5">
        <OTPInput otp={onOTP} setOtp={setOnOTP} />
      </div>
    </>
  );
};

export default OTPForm;
