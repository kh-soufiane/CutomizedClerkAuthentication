import SignUpFormProvider from "@/components/forms/sign-up/form-provider";
import React from "react";
import RegistrationFormStep from "../../../components/forms/sign-up/registration-step";
import ButtonHandler from "@/components/forms/sign-up/button-handler";
import ProgressBar from "@/components/forms/sign-up/progress-bars";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="flex-1 py-16 md:px-16 w-full justify-center">
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegistrationFormStep />
            <ButtonHandler />
          </div>
          <ProgressBar />
        </SignUpFormProvider>
      </div>
    </div>
  );
};

export default SignUp;
