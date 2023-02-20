import { Lead, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  const body = JSON.parse(req.body);

  if (!body.name || !body.email) {
    return res.status(400).json({ error: "Missing name or email" });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email as string,
    },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const newLead: Lead = await prisma.lead.create({
    data: {
      ...body,
      userId: user.id,
    },
  });

  res.status(200).json({ lead: newLead });
}
