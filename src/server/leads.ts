import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export const userWithLeads = async () => {
  const session = await getServerSession();
  if (!session?.user) {
    return null;
  }

  const userWithLeads = await prisma.user.findUnique({
    where: {
      email: session.user.email as string,
    },
    include: {
      leads: true,
    },
  });

  return userWithLeads;
};
