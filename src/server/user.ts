import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export const getUserAccout = async () => {
  const session = await getServerSession();
  if (!session?.user) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email as string,
    },
  });

  if (!user) {
    // create user
    const newUser = await prisma.user.create({
      data: {
        email: session.user.email as string,
        name: session.user.name as string,
      },
    });

    return newUser;
  }

  return user;
};
