"use client";
import { Spinner } from "@/components/spinner/spinner";
import { useAuthContextHook } from "@/context/use-auth-context";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import UserTypeSelectionForm from "./userType-selection-form";

const FormDetail = dynamic(() => import("./forms-detail"), {
  ssr: false,
  loading: Spinner,
});

const OTPForm = dynamic(() => import("./otp-form"), {
  ssr: false,
  loading: Spinner,
});

type Props = {};

const RegistrationFormStep = (props: Props) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const { currentStep } = useAuthContextHook();
  const [onOTP, setOnOTP] = useState<string>("");
  const [onUserType, setOnUserType] = useState<"owner" | "student">("owner");

  setValue("otp", onOTP);
  console.log("currentStep: ", currentStep);

  switch (currentStep) {
    case 1:
      return (
        <UserTypeSelectionForm
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        />
      );
    case 2:
      return <FormDetail errors={errors} register={register}></FormDetail>;
    case 3:
      return <OTPForm onOTP={onOTP} setOnOTP={setOnOTP} />;

    default:
      break;
  }
};

export default RegistrationFormStep;
