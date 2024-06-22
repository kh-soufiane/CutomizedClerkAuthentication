"use server";

import { client } from "@/lib/prisma";

export const onCompleteUserResgistration = async (
  fullname: string,
  clerkId: string,
  type: string
) => {
  try {
    const registred = await client.user.create({
      data: {
        fullname,
        clerkId,
        type,
      },
      select: {
        id: true,
        fullname: true,
        type: true,
      },
    });

    if (registred) {
      return { status: 200, user: registred };
    }
  } catch (error: any) {
    return { status: 400 };
  }
};
