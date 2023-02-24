import { Lead, PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export const getLeads = async () => {
  const session = await getServerSession();
  if (!session?.user) {
    return null;
  }

  const res = await prisma.user.findUnique({
    where: {
      email: session.user.email as string,
    },
    include: {
      leads: true,
    },
  });

  return res?.leads as Lead[];
};
