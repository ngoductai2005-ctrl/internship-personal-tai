import { prisma } from "@/lib/prisma";
import { TaskStatus } from "@prisma/client";
import Link from "next/link";
import { deleteTask } from "./tasks/actions";

const statusLabels: Record<string, string> = {
  TODO: "Chưa làm",
  IN_PROGRESS: "Đang làm",
  COMPLETED: "Hoàn thành",
};

const statusStyles: Record<string, string> = {
  TODO: "bg-amber-50 text-amber-700 border-amber-300",
  IN_PROGRESS: "bg-blue-50 text-blue-700 border-blue-300",
  COMPLETED: "bg-emerald-50 text-emerald-700 border-emerald-300",
};

interface HomePageProps {
  searchParams: Promise<{
    q?: string;
    status?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { q, status } = await searchParams;
  const searchQuery = q || "";

  const tasks = await prisma.task.findMany({
    where: {
      ...(q
        ? {
            title: {
              contains: q,
              mode: "insensitive",
            },
          }
        : {}),

      ...(status && status !== "ALL"
        ? {
            status: status as TaskStatus,
          }
        : {}),
    },
    include: {
      category: true,
      priority: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-slate-50/50 py-10">
      <div className="mx-auto max-w-5xl px-4 py-6 md:p-8">
        {/* Header Section */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Quản lý công việc
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Danh sách công việc từ PostgreSQL
            </p>
          </div>

          <Link
            href="/tasks/create"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg active:bg-slate-950"
          >
            + Thêm công việc
          </Link>
        </div>

        {/* Search & Filter Bar Section */}
        <form method="GET" className="mb-6 flex flex-col gap-2 md:flex-row">
          <input
            type="text"
            name="q"
            defaultValue={searchQuery}
            placeholder="Tìm kiếm công việc theo tên..."
            className="flex-1 rounded-lg border border-slate-300 bg-white p-3 text-sm text-slate-900 shadow-sm transition-all hover:border-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 placeholder:text-slate-400"
          />

          <select
            name="status"
            defaultValue={status || "ALL"}
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-sm text-slate-900 shadow-sm transition-all hover:border-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 md:w-auto"
          >
            <option value="ALL">Tất cả trạng thái</option>
            <option value="TODO">Chưa làm</option>
            <option value="IN_PROGRESS">Đang làm</option>
            <option value="COMPLETED">Hoàn thành</option>
          </select>

          <button
            type="submit"
            className="w-full rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg active:bg-slate-950 md:w-auto"
          >
            Tìm kiếm
          </button>

          {(searchQuery || (status && status !== "ALL")) && (
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-100 hover:text-slate-900"
            >
              Xóa lọc
            </Link>
          )}
        </form>

        {/* Task List */}
        {tasks.length === 0 ? (
          <div className="rounded-lg border bg-white p-8 text-center">
            <p className="text-gray-500">
              Không tìm thấy công việc nào.
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md sm:flex-row sm:items-center"
              >
                <div className="space-y-3">
                  {/* Category & Status Badge */}
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                      {task.category.name}
                    </span>

                    <span
                      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-bold ${
                        statusStyles[task.status] || "bg-gray-100 text-gray-700 border-gray-300"
                      }`}
                    >
                      {statusLabels[task.status]}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                      {task.title}
                    </h2>
                    {task.description && (
                      <p className="mt-1 text-sm leading-relaxed text-slate-600 line-clamp-2">
                        {task.description}
                      </p>
                    )}
                  </div>

                  {/* Metadata: Priority & Due Date */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400">Ưu tiên:</span>
                      <span className="text-slate-800 font-bold">
                        {task.priority.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400">Hạn:</span>
                      <span className="text-slate-800 font-semibold">
                        {task.dueDate
                          ? task.dueDate.toLocaleDateString("vi-VN")
                          : "Khong co"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions (Sửa & Xóa) */}
                <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 sm:mt-0 sm:border-0 sm:pt-0">
                  <Link
                    href={`/tasks/${task.id}/edit`}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-100 hover:text-slate-900"
                  >
                    Sửa
                  </Link>

                  <form action={deleteTask} className="inline-block">
                    <input type="hidden" name="id" value={task.id} />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-xl border border-rose-300 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600 shadow-sm transition-all hover:bg-rose-100 hover:text-rose-700"
                    >
                      Xóa
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}