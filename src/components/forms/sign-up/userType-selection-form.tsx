"use client";

import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import UserTypeCard from "./userType-card";

type Props = {
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};

const TypeSelectionForm = ({ register, userType, setUserType }: Props) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold text-center">
        Create an account
      </h2>
      <p className="text-iridium md:text-sm text-center">
        Tell us about yourself! what do you do? Let&apos;s tailor your
        <br /> experience so it best suits you.
      </p>
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="owner"
        title="I own a business"
        description="Setting up my account for my company."
      />
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="student"
        title="I own a student"
        description="Looking to learn about the tool."
      />
    </>
  );
};

export default TypeSelectionForm;
