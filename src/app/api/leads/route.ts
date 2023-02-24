import { getServerSession } from "next-auth";
import { Lead, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const session = await getServerSession();

  if (!session?.user) {
    return new Response("Not authenticated", {
      status: 401,
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email as string,
    },
  });

  if (!user) {
    return new Response("User not found", {
      status: 403,
    });
  }

  const postBody = await request.json();

  const newLead: Lead = await prisma.lead.create({
    data: {
      ...postBody,
      userId: user.id,
    },
  });

  return new Response(JSON.stringify({ lead: newLead }), {
    status: 200,
  });
}
