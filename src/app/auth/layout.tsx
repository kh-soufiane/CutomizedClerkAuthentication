import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import LOGO from "../../../public/images/logo.png";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const user = await currentUser();

  if (user) redirect("/");

  return (
    <div className="h-screen flex w-full justify-center ">
      <div className="w-[1000px] ld:w-full flex flex-col items-center p-10 gap-4">
        <Image
          alt="LOGO"
          src={LOGO}
          sizes="100vw"
          style={{
            width: "20%",
            height: "auto",
          }}
          width={0}
          height={0}
        />
        <h2 className="text-gravel md:text-xl text-center">
          Hi, I&apos;m an authentication system built <br />
          with nextJs, Clerk, and Prisma
        </h2>
        {children}
      </div>
    </div>
  );
};

export default Layout;
