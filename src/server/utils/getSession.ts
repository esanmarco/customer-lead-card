import { unstable_getServerSession } from "next-auth/next";

export default async function getSession() {
  return await unstable_getServerSession();
}
