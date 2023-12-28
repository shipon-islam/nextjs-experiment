"use server";
import prisma from "@/prisma/db";
import { revalidatePath } from "next/cache";

export const todoAction = async (formData: FormData) => {
  const todo = formData.get("todo") as string;

  const newTodo = await prisma.todos.create({
    data: {
      name: todo,
    },
  });
  if (!newTodo) throw new Error("todo not created");
  revalidatePath("/todos");
};
export const postAction = async (formData: FormData) => {
  const post = formData.get("post") as string;
  const newPost = await prisma.posts.create({
    data: {
      status: post,
    },
  });
  if (!newPost) throw new Error("post not created");
  revalidatePath("/posts");
  return newPost;
};
export const handleDelete = async (productId: string) => {
  const data = await prisma.todos.delete({
    where: {
      id: productId,
    },
  });
};
