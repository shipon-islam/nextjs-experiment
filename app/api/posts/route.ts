import prisma from "@/prisma/db";

import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const post = await prisma.posts.create({
    data: {
      status: body.status,
    },
  });

  return Response.json({ revalidated: true, post });
}
export async function GET(req: NextRequest) {
  const posts = await prisma.posts.findMany();
  return Response.json({ posts });
}
