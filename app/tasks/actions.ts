"use server";

import { prisma } from "../../lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import type { TaskStatus } from "@prisma/client";

export async function createTask(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const categoryId = Number(formData.get("categoryId"));
  const priorityId = Number(formData.get("priorityId"));
  const dueDate = formData.get("dueDate") as string;

  // Validation phía Server
  if (!title || title.trim().length < 3) {
    throw new Error("Tiêu đề phải có ít nhất 3 ký tự");
  }
  if (!dueDate) {
    throw new Error("Vui lòng chọn hạn hoàn thành");
  }
const selectedDate = new Date(dueDate);
const today = new Date();

today.setHours(0, 0, 0, 0);
selectedDate.setHours(0, 0, 0, 0);

if (selectedDate < today) {
  throw new Error("Không được chọn ngày đã qua");
}
  await prisma.task.create({
    data: {
      title,
      description,
      status: "TODO",
      dueDate: new Date(dueDate),
      categoryId,
      priorityId,
    },
  });

  revalidatePath("/");
  redirect("/");
}

export async function updateTask(formData: FormData) {
  const id = Number(formData.get("id"));
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const categoryId = Number(formData.get("categoryId"));
  const priorityId = Number(formData.get("priorityId"));
  const status = formData.get("status") as TaskStatus;
  const dueDate = formData.get("dueDate") as string;

  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      title,
      description,
      categoryId,
      priorityId,
      status,
      dueDate: new Date(dueDate),
    },
  });

  revalidatePath("/");
  redirect("/");
}

export async function deleteTask(formData: FormData) {
  const id = Number(formData.get("id"));

  await prisma.taskHistory.deleteMany({
    where: {
      taskId: id,
    },
  });

  await prisma.task.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
}